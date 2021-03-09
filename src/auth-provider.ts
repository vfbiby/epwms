import AsyncStorage from '@react-native-async-storage/async-storage';
import {User, Form} from './context/auth-context';

export const localStorageKey = '__auth_provider_token__';

const handleUserResponsed = ({user, token}: {user: User; token: string}) => {
  AsyncStorage.setItem(localStorageKey, token || '');
  return user;
};

export const login = async (data: Form) => {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (!response.ok) {
      return Promise.reject(await response.json());
    }
    return handleUserResponsed((await response.json())['data']);
  });
};

export async function getToken() {
  return (await AsyncStorage.getItem(localStorageKey)) || undefined;
}

export async function logout() {
  await AsyncStorage.removeItem(localStorageKey);
}
