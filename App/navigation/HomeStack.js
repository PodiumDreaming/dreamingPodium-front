import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';

import TrainingNoteScreen from '../screens/Depth/TrainingNoteScreen';
import ConditioningNoteScreen from '../screens/Depth/ConditioningNoteScreen';
import WritingScreen from '../screens/Depth/WritingScreen';
import DreamScreen from '../screens/Home/DreamScreen';
import ProfileEditScreen from '../screens/Depth/ProfileEditScreen';

const StackHome = createStackNavigator();

import {colors} from '../config/globalStyles';

const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const HomeStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="HomeScreen">
      <StackHome.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="TrainingNote"
        component={TrainingNoteScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="ConditioningNote"
        component={ConditioningNoteScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="DreamScreen"
        component={DreamScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="WritingScreen"
        component={WritingScreen}
        options={{
          title: '글 작성하기',
          headerTintColor: colors.primary,
          headerTitleStyle: {
            lineHeight: 22,
            letterSpacing: -0.6,
            color: colors.primary,
          },
          headerBackTitle: ' ',
          headerBackTitleStyle: {
            marginLeft: 10,
            width: 10,
          },
        }}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
