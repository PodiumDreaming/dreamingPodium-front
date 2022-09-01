import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/Home/ProfileScreen';
import ProfileEditScreen from '../screens/Depth/ProfileEditScreen';

const StackProfile = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const ProfileStack = ({navigation, route}) => {
  return (
    <StackProfile.Navigator initialRouteName="ProfileScreen">
      <StackProfile.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={navOptionHandler}
      />
    </StackProfile.Navigator>
  );
};

export default ProfileStack;
