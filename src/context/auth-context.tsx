import React, {ReactNode} from 'react';
import * as Auth from '../auth-provider';
import {client} from '../utils/api-client';
import {useAsync} from '../utils/use-async';
import {View, Text, SafeAreaView} from 'react-native';

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
  avatar?: string;
}

export interface Form {
  username: string;
  password: string;
}

export const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: Form) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const {
    data: user,
    isIdle,
    isLoading,
    isError,
    error,
    run,
    setData: setUser,
  } = useAsync<User | null>();

  const login = (form: Form) => Auth.login(form).then(setUser);
  const logout = () => Auth.logout().then(() => setUser(null));

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token = await Auth.getToken();
      run(client('http://pda.erppre.com/api/user/info', {token}));
    };
    bootstrapAsync();
  }, []);

  if (isIdle || isLoading) {
    return (
      <SafeAreaView>
        <View>
          <Text>isLoading</Text>
        </View>
      </SafeAreaView>
    );
    //return <FullPageSpinner />;
  }

  if (isError) {
    return (
      <SafeAreaView>
        <View>
          <Text>{error?.message}</Text>
        </View>
      </SafeAreaView>
    );
    //return <FullPageErrorFallback error={error} />;
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
