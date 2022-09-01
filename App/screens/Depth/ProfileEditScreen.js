/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';

// REDUX
import {useSelector, useDispatch} from 'react-redux';
import {setProfile, setUser, setUserImage} from '../../reducer/userSlice';
import ImagePicker from 'react-native-image-crop-picker';

import ProfileInputLine from '../../components/ProfileInputLine';
import {colors, images, width, height} from '../../config/globalStyles';

import NOTEAPI from '../../utils/note';
import PROFILEAPI from '../../utils/profile';

function ProfileEditScreen({navigation, ...props}) {
  const user = useSelector(state => state.user);
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const todayDate = useSelector(state => state.posting.todayDate);
  const dispatch = useDispatch();

  const [imgLoading, setImgLoading] = useState(true);

  const [choosePicture, setChoosePicture] = useState(false);

  const [name, setName] = useState(user.username);
  const [gender, setGender] = useState(user.gender);
  const [birth, setBirth] = useState(user.birth);

  // pictures for redux & image for api
  const [picture, setPicture] = useState(
    user.userImage !== null ? user.userImage : '',
  );
  const [image, setImage] = useState(
    user.userImage !== null ? user.userImage : '',
  );
  const [team, setTeam] = useState(user.team);
  const [field, setField] = useState(user.field);

  const showImage = async () => {
    ImagePicker.openPicker({
      multiple: false,
      waitAnimationEnd: false,
      sortOrder: 'asc',
      includeExif: true,
      forceJpg: true,
      mediaType: 'photo',
    })
      .then(data => {
        setImage({
          uri: data.path,
          type: data.mime,
          name: 'image.jpeg',
        });
        setPicture(data.path);
        setChoosePicture(true);
      })
      .catch(e => {
        console.warn(e);
      });
  };
  var formData = new FormData();
  formData.append('files', image);

  const submitUserProfile = async () => {
    //redux
    dispatch(
      setProfile({
        username: name,
        gender: gender ? gender : user.gender,
        birth: birth ? birth : new Date(user.birth).toDateString(),
        userImage: picture !== '' ? picture : '',
        field: field,
        team: team,
      }),
    );

    // 프로필 수정 저장  API
    await PROFILEAPI.postProfileInfo(
      userToken,
      name,
      gender ? gender : user.gender,
      birth
        ? new Date(birth).toDateString()
        : new Date(user.birth).toDateString(),
      team,
      field,
    );

    // 프로필 이미지 저장  API
    if (choosePicture === true) {
      await NOTEAPI.postImage(
        userToken,
        'profile',
        todayDate,
        formData,
        serverToken,
      );
    }

    Alert.alert('라잇', '프로필 설정이 완료되었습니다.', [{text: '확인'}]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={10}
        behavior={Platform.OS === 'ios' ? 'position' : 'position'}
        enabled
        style={{flex: 1, backgroundColor: colors.white}}>
        <SafeAreaView style={{height: '100%'}}>
          <View style={styles.profileTitleArea}>
            <Text style={styles.profileTitle}>프로필 수정</Text>
          </View>

          <View style={{flex: 2}}>
            <TouchableOpacity
              style={styles.profileImgArea}
              onPress={() => {
                showImage();
              }}>
              {image.length !== 0 ? (
                <>
                  {imgLoading && (
                    <ActivityIndicator
                      style={{
                        width: 150,
                        height: 150,
                      }}
                    />
                  )}
                  <Image
                    onLoad={() => {
                      setImgLoading(false);
                    }}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    resizeMode="cover"
                    resizeMethod="auto"
                    source={{
                      uri: picture,
                    }}
                  />
                </>
              ) : (
                <Image
                  style={{
                    width: 150,
                    height: 150,
                  }}
                  source={images.profileImgGroup}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{flex: 4}}>
            <ProfileInputLine
              inputName="이름"
              value={name}
              onChangeText={event => {
                setName(event);
              }}
            />
            <ProfileInputLine
              inputType="gender"
              inputName="성별"
              value={gender}
              onChangeGender={setGender}
            />
            <ProfileInputLine
              inputType="date"
              inputName="생일"
              value={birth}
              onConfirm={event => {
                setBirth(event);
              }}
            />
            <ProfileInputLine
              maxLength={12}
              inputName="소속"
              onChangeText={event => {
                setTeam(event);
              }}
              value={team}
            />
            <ProfileInputLine
              maxLength={12}
              inputName="종목"
              onChangeText={event => {
                setField(event);
              }}
              value={field}
            />
          </View>

          <View style={{flex: 0.8, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                submitUserProfile();
                Keyboard.dismiss();

                AsyncStorage.getItem('isVisitedUser').then(data => {
                  // 방문 기록이 없는 유저이면
                  if (data !== 'true') {
                    navigation.navigate('HomeScreen');
                  } else {
                    navigation.push('ProfileScreen');
                  }
                });

                AsyncStorage.setItem('isVisitedUser', 'true');
              }}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}> 저장 </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGrey,
    paddingTop: 30,
    paddingLeft: 25,
  },
  profileTitleArea: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImgArea: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 100,
    alignSelf: 'center',
  },
  profileImgGroup: {
    width: width * 160,
    height: height * 160,
  },
  submitButton: {
    width: width * 90,
    height: height * 30,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: colors.whiteGrey,
    borderRadius: 10,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ProfileEditScreen;
