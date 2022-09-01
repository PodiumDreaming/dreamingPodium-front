/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  Keyboard,
} from 'react-native';
import ImageDeleteList from '../../components/training/ImageDeleteList';
import ImagePicker from 'react-native-image-crop-picker';
import {submitNote, deleteImage} from '../../reducer/postingSlice';
import {colors, width, height, fonts} from '../../config/globalStyles';
import API from '../../utils/note';

function WritingScreen({navigation, route}) {
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const todayDate = useSelector(state => state.posting.todayDate);
  const NoteList = useSelector(
    state => state.posting.writtenNote.noteContentGroup.training,
  );
  const dispatch = useDispatch();
  const [content, setContent] = useState(
    route.params.value ? route.params.value : null,
  );
  const [pictures, setPictures] = useState([]);
  const [choosePicture, setChoosePicture] = useState(false);

  const pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'asc',
      includeExif: true,
      forceJpg: true,
      mediaType: 'photo',
    })
      .then(images => {
        if (pictures && pictures.length > 0) {
          const inputImage = images.map((v, i) => {
            return {
              uri: v.path,
              type: v.mime,
              name: 'image.jpeg',
            };
          });
          const list = [...pictures, ...inputImage];
          setPictures(list);
          setChoosePicture(true);
        } else {
          if (images.length > 5) {
            const maxImage = [];
            images.map((v, i) => {
              if (i < 5) {
                return maxImage.push(v);
              }
            });
            setPictures(
              maxImage.map((v, i) => {
                return {
                  uri: v.path,
                  type: v.mime,
                  name: 'image.jpeg',
                };
              }),
            );
            setChoosePicture(true);
          } else {
            setPictures(
              images.map((v, i) => {
                return {
                  uri: v.path,
                  type: v.mime,
                  name: 'image.jpeg',
                };
              }),
            );
            setChoosePicture(true);
          }
        }
        return Alert.alert('라잇', '사진 첨부가 완료되었습니다');
      })
      .catch(e => {
        console.log(e);
      });
  };
  var formData = new FormData();
  const uploadImageData = pictures.filter(value => value.name === 'image.jpeg');
  uploadImageData.forEach((v, i) => {
    formData.append('files', v);
  });

  const handleDeleteImage = imageURI => {
    Alert.alert('라잇', '사진을 삭제 하시겠습니까 ? ', [
      {
        text: '취소',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: '삭제',
        onPress: () => {
          console.log('OK Pressed', imageURI);

          dispatch(
            deleteImage({
              userToken: userToken,
              noteIdx: route.params.noteIdx,
              serverToken: serverToken,
              imageURI: imageURI,
            }),
          );

          Alert.alert('라잇', '사진 삭제가 완료되었습니다', [{text: '확인'}]);
          dispatch(
            submitNote({
              date: todayDate,
              noteIdx: route.params.noteIdx,
              content: content,
              image: pictures.map(data => {
                return data.uri;
              }),
            }),
          );
        },
      },
    ]);
  };

  const submitRecord = async () => {
    if (!content) {
      Alert.alert('라잇', '내용을 입력해 주세요 ✍️', [{text: '확인'}]);
    } else {
      // 레코드 상태 관리
      dispatch(
        submitNote({
          date: todayDate,
          noteIdx: route.params.noteIdx,
          content: content,
          image: pictures.map(data => {
            return data.uri;
          }),
        }),
      );
      // 레코드 제출
      await API.postRecord(
        userToken,
        todayDate,
        route.params.noteIdx,
        content,
        serverToken,
      );
      // 사진 제출
      if (choosePicture) {
        await API.postImage(
          userToken,
          route.params.noteIdx,
          todayDate,
          formData,
          serverToken,
        );
      }
      navigation.navigate('TrainingNote', {
        content: content,
        noteTitle: route.params.title,
      });
    }
  };

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: 'white'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: '100%',
          }}>
          <Text style={styles.title}>{route.params.title}</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              multiline={true}
              placeholder={
                route.params.placeholder
                  ? route.params.placeholder
                  : route.params.value
              }
              value={content}
              returnKeyType="next"
              onChange={event => {
                const {eventCount, target, text} = event.nativeEvent;
                setContent(text);
              }}
            />
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            {(route.params.noteIdx === 'success' ||
              route.params.noteIdx === 'failure') && (
              <TouchableOpacity
                style={{...styles.submitButton, marginRight: 10}}
                onPress={() => pickMultiple()}>
                <Text style={styles.submitText}>사진첨부</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                submitRecord();
              }}>
              <Text style={styles.submitText}>작성완료</Text>
            </TouchableOpacity>
          </View>

          {/* 이미지 삭제 리스트 */}
          <ImageDeleteList
            NoteList={NoteList[route.params.noteIdx].image}
            handleDeleteImage={handleDeleteImage}
            noteIdx={route.params.noteIdx}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  input: {
    flex: 1,
    fontFamily: fonts.spoqaLight,
    width: width * 343,
    fontSize: 15,
    lineHeight: 25,
    padding: 13,
  },
  inputBox: {
    minHeight: height * 270,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: colors.primary,
    fontSize: 13,
    lineHeight: 25,
  },
  submitButton: {
    fontFamily: fonts.spoqaRegular,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
    width: 62,
    height: 24,
    backgroundColor: colors.primary,
    fontSize: 8,
    justifyContent: 'center',
  },
  submitText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  imageList: {width: width * 70, height: height * 70},
});

export default WritingScreen;
