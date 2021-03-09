import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../pages/Home';
import {Login} from '../pages/Login';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

let Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Login"
          options={{headerTitle: '登录'}}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{headerTitle: '首页'}}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
