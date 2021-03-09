import {View, Text} from 'react-native';
import React from 'react';
import tailwind from 'tailwind-rn';

export const Login = () => {
  return (
    <View>
      <Text style={tailwind('bg-blue-200 px-4 py-2')}>Login</Text>
    </View>
  );
};
