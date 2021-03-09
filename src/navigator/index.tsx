import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../pages/Home';
import {Login} from '../pages/Login';
import {useAuth} from '../utils/use-auth';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

interface RootStackProps {
  userToken: string | null;
}

let Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        {user?.token === null ? (
          <Stack.Screen
            name="Login"
            options={{headerTitle: '登录'}}
            component={Login}
          />
        ) : (
          <Stack.Screen
            name="Home"
            options={{headerTitle: '首页'}}
            component={Home}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
