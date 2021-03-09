import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tailwind from 'tailwind-rn';
import {useForm, Controller} from 'react-hook-form';

type LoginFormProps = {
  username: string;
  password: string;
};

export const Login = () => {
  const {control, handleSubmit, errors} = useForm<LoginFormProps>();
  const onSubmit = (data: LoginFormProps) =>
    console.log(data);

  return (
    <View style={tailwind('flex justify-center min-h-full p-2')}>
      <View style={tailwind('py-2')}>
        <Text style={tailwind('uppercase')}>用户名: </Text>
        <Controller
          control={control}
          name="username"
          rules={{required: true}}
          defaultValue=""
          render={({onBlur, onChange, value}) => (
            <TextInput
              style={tailwind(
                'px-4 py-3 my-2 border border-red-300 bg-gray-200',
              )}
              placeholder="Username"
              value={value}
              onBlur={onBlur}
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
          rules={{required: true}}
          defaultValue=""
          render={({onBlur, onChange, value}) => (
            <TextInput
              style={tailwind(
                'px-4 py-3 border my-2 border-red-300 bg-gray-200',
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
