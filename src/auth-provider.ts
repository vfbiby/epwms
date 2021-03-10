import AsyncStorage from '@react-native-async-storage/async-storage';
import {User, Form} from './context/auth-context';

export const localStorageKey = '__auth_provider_token__';

const handleUserResponsed = async (user: User) => {
  await AsyncStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const login = async (data: Form) => {
  return fetch('http://pda.erppre.com/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (!response.ok) {
      return Promise.reject(await response.json());
    }
    return handleUserResponsed(await response.json());
  });
};

export async function getToken() {
  return (await AsyncStorage.getItem(localStorageKey)) || undefined;
}

export async function logout() {
  return await AsyncStorage.removeItem(localStorageKey);
}
