import React, {ReactNode} from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {AuthContext, Form} from '../context/auth-context';
import {useAuth} from './use-auth';

describe('useAuth', () => {
  it.skip('should get context value from ancestor', () => {
    const authContext = {
      user: {
        id: 1,
        name: 'bb',
        email: '3432@qq.com',
        token: 'valid-token',
      },
      login: function (form: Form) {
        form;
        return Promise.resolve();
      },
      logout: function () {},
    };
    const wrapper = ({children}: {children: ReactNode}) => (
      <AuthContext.Provider value={authContext}>
        {children}
      </AuthContext.Provider>
    );
    const {result} = renderHook(() => useAuth(), {wrapper});
    expect(result.current.user?.name).toEqual('bb');
    expect(result.current.user?.id).toEqual(1);
  });

  it('should throw an error when useAuth not wrapped by context', function () {
    const {result} = renderHook(() => useAuth());
    expect(result.error).toEqual(
      Error('useAuth must be used within a AuthProvider'),
    );
  });
});
