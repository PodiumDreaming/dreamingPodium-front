import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WritingScreen from '../screens/Depth/WritingScreen';
import ProfileEditScreen from '../screens/Depth/ProfileEditScreen';

const StackDepth = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const DepthStack = ({navigation, route}) => {
  return (
    <StackDepth.Navigator>
      <StackDepth.Screen
        name="WritingScreen"
        component={WritingScreen}
        options={navOptionHandler}
      />
      <StackDepth.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={navOptionHandler}
      />
    </StackDepth.Navigator>
  );
};

export default DepthStack;
