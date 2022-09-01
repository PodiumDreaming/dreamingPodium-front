import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTab';
import DepthStack from './DepthStack';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      presentation="card">
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
      <Stack.Screen name="Depth" component={DepthStack} />
    </Stack.Navigator>
  );
}

export default MainStack;
