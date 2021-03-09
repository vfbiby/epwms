import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import tailwind from 'tailwind-rn';
import {useForm, Controller} from 'react-hook-form';
import {useAsync} from '../utils/use-async';
import {useAuth} from '../utils/use-auth';

type LoginFormProps = {
  username: string;
  password: string;
};

export const Login = () => {
  const {control, handleSubmit, errors} = useForm<LoginFormProps>();
  const {run} = useAsync();
  const {login} = useAuth();
  const onSubmit = (data: LoginFormProps) => {
    run(login(data), {throwOnError: true}).catch(() => {
      throw new Error('Login failed!');
    });
  };

  return (
    <View style={tailwind('flex justify-center min-h-full p-2')}>
      <View style={tailwind('py-2')}>
        <Text style={tailwind('py-2')}>用户名: </Text>
        <Controller
          control={control}
          name="username"
          rules={{required: true}}
          defaultValue="15336551131@mh"
          render={({onBlur, onChange, value}) => (
            <TextInput
              style={tailwind(
                'px-4 py-3 my-2 border border-blue-300 bg-gray-200',
              )}
              placeholder="Username"
              value={value}
              onBlur={onBlur}
              autoCapitalize="none"
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        {errors.username && <Text>Username is required!</Text>}
      </View>

      <View style={tailwind('py-2')}>
        <Text style={tailwind('uppercase')}>密码: </Text>
        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{required: true}}
          render={({onBlur, onChange, value}) => (
            <TextInput
              style={tailwind(
                'px-4 py-3 border my-2 border-blue-300 bg-gray-200',
              )}
              placeholder="Password"
              value={value}
              onBlur={onBlur}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        {errors.password && <Text>Password is required!</Text>}
      </View>
      <TouchableOpacity style={tailwind('bg-blue-300 py-3 mt-4')}>
        <Button onPress={handleSubmit(onSubmit)} title="登录" />
      </TouchableOpacity>
    </View>
  );
};
