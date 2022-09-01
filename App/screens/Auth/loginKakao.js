/* eslint-disable no-alert */
//카카오 로그인 프로세스
import * as KakaoLogins from '@react-native-seoul/kakao-login';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../../utils/auth';

const signInKakaoTalk = async (setUserInfo, setLoggedIn, navigation) => {
  const fcmToken = await AsyncStorage.getItem('deviceToken');

  KakaoLogins.login()
    .then(async data => {
      const postData = data;
      // Token return And Set AsyncStorage To login
      await API.postKakaoToken(
        data.accessToken,
        data.refreshToken,
        setLoggedIn,
      );
    })
    .then(data => {
      KakaoLogins.getProfile()
        .then(response => {
          const {id, nickname, gender, birthday} = response;

          setUserInfo({
            provider: 'kakao',
            serviceId: id,
            platform: Platform.OS.toUpperCase(),
          });
        })
        .catch(err => {
          console.log({err});
          alert(err);
        });
    })
    .catch(err => {
      if (err.code === 'E_CANCELLED_OPERATION') {
        console.log('에러메시지', err.message);
        alert('로그인을 취소했습니다.');
      } else {
        console.log(
          err.message,
          err.code,
          {err},
          '카카오톡 로그인 프로세스를 취소하는 동안 오류가 발생했습니다.',
        );
      }
    });
};

const signOutKakaoTalk = async () => {
  await AsyncStorage.removeItem('userToken');

  KakaoLogins.logout()
    .then(result => {
      console.log('kakao logout', result);
    })
    .catch(err => {
      console.log('kakao logout error', err);
    });
};

export {signInKakaoTalk, signOutKakaoTalk};
