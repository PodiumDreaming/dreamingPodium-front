/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import ObjectCard from '../../components/ObjectCard';
import {colors, width, height} from '../../config/globalStyles';
import {
  submitObject,
  deleteObject,
  fetchNoteData,
} from '../../reducer/postingSlice';
import API from '../../utils/note';

function DreamScreen({navigation, ...props}) {
  const [keyBoardAvoid, setKeyBoardAvoid] = useState(true);
  const todayDate = useSelector(state => state.posting.todayDate);
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const objectNote = useSelector(state => state.posting.ObjectNote);
  const dispatch = useDispatch();

  // 목표 설정 textInput 핸들링
  const addObjectItem = (type, text) => {
    if (objectNote[type].length > 0 && objectNote[type].includes(text)) {
      Alert.alert('라잇', '중복된 내용은 작성할 수 없습니다 😢 ', [
        {text: '확인'},
      ]);
    } else if (text === '') {
      Alert.alert('라잇', '내용을 입력해 주세요 ✍️', [{text: '확인'}]);
    } else {
      dispatch(
        submitObject({
          ObjectType: type,
          content: text,
        }),
      );
    }
  };

  // 목표설정 제출
  const submitObjectList = () => {
    const objectives = objectNote.objectives;
    const requirements = objectNote.requirements;
    const efforts = objectNote.efforts;
    const routines = objectNote.routines;

    API.postObjectInit(userToken, objectives, requirements, efforts, routines);

    // routine을 수정할 경우 트레이닝 파트와의 동기화를 위해 다시 record/get 요청을 받아옵니다.
    dispatch(
      fetchNoteData({
        user_id: userToken,
        date: todayDate,
        serverToken: serverToken,
      }),
    );

    // 첫 방문 유저라면 프로필 수정 페이지로 이동 합니다
    AsyncStorage.getItem('isVisitedUser').then(data => {
      if (data !== 'true') {
        navigation.navigate('ProfileEditScreen');
      } else {
        navigation.push('HomeApp');
      }
    });
  };

  const deleteObjectItem = (type, text) => {
    dispatch(
      deleteObject({
        ObjectType: type,
        content: text,
      }),
    );
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height * 10}
      behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
      enabled={keyBoardAvoid}
      style={styles.DreamPage}>
      <SafeAreaView>
        <View style={styles.SafeAreaView}>
          <View>
            <Text style={styles.dreamTitle}>목표달성</Text>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              submitObjectList();
            }}>
            <Text style={styles.submitText}>완료</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View>
            <ObjectCard
              title="나의 최종 목표"
              maxLength={16}
              objectValues={objectNote.objectives}
              addObjectItem={text => {
                addObjectItem('objectives', text);
              }}
              deleteObjectItem={text => {
                deleteObjectItem('objectives', text);
              }}
              onPress={() => setKeyBoardAvoid(false)}
            />
            <ObjectCard
              title="필요한 자질"
              objectValues={objectNote.requirements}
              addObjectItem={text => {
                addObjectItem('requirements', text);
              }}
              deleteObjectItem={text => {
                deleteObjectItem('requirements', text);
              }}
              onPress={() => setKeyBoardAvoid(false)}
            />
            <ObjectCard
              title="매일 해야 하는 노력"
              objectValues={objectNote.efforts}
              addObjectItem={text => {
                addObjectItem('efforts', text);
              }}
              deleteObjectItem={text => {
                deleteObjectItem('efforts', text);
              }}
              onPress={() => setKeyBoardAvoid(true)}
            />
            <ObjectCard
              title="루틴 설정"
              objectValues={objectNote.routines}
              addObjectItem={text => {
                addObjectItem('routines', text);
              }}
              deleteObjectItem={text => {
                deleteObjectItem('routines', text);
              }}
              onPress={() => setKeyBoardAvoid(true)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  DreamPage: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  SafeAreaView: {
    flexDirection: 'row',
    marginTop: height * 35,
    marginBottom: height * 35,
  },
  dreamTitle: {
    fontSize: 22,
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  addObjectItem: {
    fontSize: 18,
    color: colors.lightGrey,
    fontWeight: 'bold',
  },
  submitButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  submitText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default DreamScreen;
