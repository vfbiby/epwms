import 'react-native';
import React from 'react';
import {Login} from './Login';
import {render} from '@testing-library/react-native';
import {mocked} from 'ts-jest/utils';
import {useAuth} from '../utils/use-auth';

jest.mock('../utils/use-auth');

describe('Login Page', () => {
  it('should show username and password input', () => {
    (mocked(useAuth) as jest.Mock).mockReturnValue({
      login: jest.fn(),
    });
    const {getByPlaceholderText} = render(<Login />);

    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });
});
