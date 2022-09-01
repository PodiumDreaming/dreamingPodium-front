/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {HomePartCard} from '../../components/HomePartCard';
import {HeaderProfile} from '../../components/training/HeaderProfile.js';

import {useDispatch, useSelector} from 'react-redux';
import {
  selectDate,
  fetchNoteData,
  fetchObjective,
} from '../../reducer/postingSlice';
import {fetchProfileData} from '../../reducer/userSlice';

import {colors} from '../../config/globalStyles';
import ConditioningCard from '../../assets/svg/conditioningCard';
import TrainingCard from '../../assets/svg/trainingCard';

function HomeScreen({navigation, ...props}) {
  const todayDate = useSelector(state => state.posting.todayDate);
  const userToken = useSelector(state => state.user.userToken);
  const serverToken = useSelector(state => state.user.serverToken);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('userToken').then(data => {
      if (data) {
        // 프로필 기록 불러오기
        dispatch(
          fetchProfileData({
            user_id: userToken,
          }),
        );

        // 목표 설정 기록 불러오기
        dispatch(
          fetchObjective({
            user_id: userToken,
          }),
        );
        // 트레이닝, 컨디셔닝 기록 불러오기
        dispatch(
          fetchNoteData({
            user_id: userToken,
            date: todayDate,
            serverToken: serverToken,
          }),
        );

        // 첫 방문 유저라면 목표 설정 페이지로 이동합니다.
        AsyncStorage.getItem('isVisitedUser').then(visited => {
          if (visited !== 'true') {
            navigation.push('DreamScreen');
          }
        });
      }
    });
  }, [dispatch, navigation, serverToken, todayDate, userToken]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.HomePartCard}>
        <HeaderProfile />

        <HomePartCard
          onPress={() => {
            dispatch(selectDate({date: new Date().toDateString()}));
            navigation.push('TrainingNote');
          }}
          partTitle="트레이닝 파트"
          partSubtitle="훈련내용, 피드백 남기기">
          {
            <TrainingCard
              style={{
                position: 'absolute',
              }}
              width={'100%'}
              height={'100%'}
            />
          }
        </HomePartCard>

        <HomePartCard
          onPress={() => {
            dispatch(selectDate({date: new Date().toDateString()}));
            navigation.push('ConditioningNote');
          }}
          partTitle="컨디셔닝 파트"
          partSubtitle="부상 정보 남기기">
          {
            <ConditioningCard
              style={{
                position: 'absolute',
              }}
              width={'100%'}
              height={'100%'}
            />
          }
        </HomePartCard>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  DateTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 48,
    paddingBottom: 28,
  },
  homeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darkGrey,
    paddingBottom: 48,
  },
  HomePartCard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default HomeScreen;
