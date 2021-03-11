import 'react-native';
import React from 'react';
import {Login} from './Login';
import {render} from '@testing-library/react-native';
import {AuthContext, Form} from '../context/auth-context';

describe('Login Page', () => {
  it('should show username and password input', () => {
    const authContext = {
      user: {
        id: 1,
        name: 'bb',
        email: '3432@qq.com',
        token: 'valid-token',
      },
      login: (form: Form) => Promise.resolve(),
      logout: () => {},
    };
    const {getByPlaceholderText} = render(
      <AuthContext.Provider value={authContext}>
        <Login />
      </AuthContext.Provider>,
    );

    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });
});
