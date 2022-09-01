import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import MainStack from './navigation/MainStack';
import LoginScreen from './screens/Auth/LoginScreen';
import DreamStack from './navigation/DreamStack';
import ProfileStack from './navigation/ProfileStack';

import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {selectLogin, setUserToken} from './reducer/userSlice';
const StackApp = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const App = navigation => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLogin);

  // 자동로그인 userToken 과 serverToken state 관리
  useEffect(() => {
    AsyncStorage.multiGet(['userToken', 'serverToken'], (_err, items) => {
      if (items[0][1] !== null) {
        dispatch(
          setUserToken({
            userToken: items[0][1],
            serverToken: items[1][1],
          }),
        );
      }
    });
  }, [dispatch]);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackApp.Navigator presentation="modal">
            {/* UserToken이 없으면 로그인 페이지로 이동합니다 */}
            {loggedIn === false ? (
              <StackApp.Screen
                name="Login"
                component={LoginScreen}
                options={navOptionHandler}
              />
            ) : (
              <>
                <StackApp.Screen
                  name="HomeApp"
                  component={MainStack}
                  options={navOptionHandler}
                />
                <StackApp.Screen
                  name="dream"
                  component={DreamStack}
                  options={navOptionHandler}
                />
                <StackApp.Screen
                  name="profile"
                  component={ProfileStack}
                  options={navOptionHandler}
                />
              </>
            )}
          </StackApp.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
