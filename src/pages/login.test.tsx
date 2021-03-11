import 'react-native';
import React from 'react';
import {Login} from './Login';
import {render} from '@testing-library/react-native';
import App from '../../App';

describe('Login Page', () => {
  it('should show username and password input', () => {
    render(<App />);
  });
});
