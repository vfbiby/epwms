import {getToken, localStorageKey} from '../auth-provider';
import {client} from './api-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchMock from 'fetch-mock';

fetchMock.config.overwriteRoutes = false;
fetchMock
  .get('/401', 401)
  .get('/getForTest', {user_id: null})
  .get('/getForTest?user_id=8834', {user_id: '8834'})
  .mock(
    {url: '/login', method: 'POST', body: {username: 'vf', password: 'bb'}},
    {
      status: 200,
      data: {
        user: {
          id: 1,
          name: 'bb',
          email: '3432@qq.com',
          avator_url:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLy3Vy8eiaLz8aDCIktUfcqpW1fIfv8w6DX0krO2NcA0SpgN7XwembK8Kk5TNtt6ZDDJkeazDy3OBA/132',
        },
        token: 'valid-token',
      },
    },
  )
  .post('/login', 401)
  .get('/me', {
    errorMessage: 'Not authorized',
  });

describe('Api-client', () => {
  it('should support get method', async () => {
    const result = client('/getForTest').then();
    expect(await result).toStrictEqual({user_id: null});
  });

  it('should support get method with data', async () => {
    const result = await client('/getForTest', {
      data: {user_id: '8834'},
    }).then();
    expect(result).toEqual({user_id: '8834'});
  });

  it('should support post method', async () => {
    const result = client('/login', {method: 'POST'});
    await expect(result).rejects.toEqual('Please re-authenticate.');
  });

  it('should accept data to post to server to login', async () => {
    const result = await client('/login', {
      method: 'POST',
      data: {username: 'vf', password: 'bb'},
    }).then();
    expect(result).toStrictEqual({
      status: 200,
      data: {
        user: {
          id: 1,
          name: 'bb',
          email: '3432@qq.com',
          avator_url:
            'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLy3Vy8eiaLz8aDCIktUfcqpW1fIfv8w6DX0krO2NcA0SpgN7XwembK8Kk5TNtt6ZDDJkeazDy3OBA/132',
        },
        token: 'valid-token',
      },
    });
  });

  it('should delete token, refresh, throw error when get 401 status code', async () => {
    expect(await getToken()).toBe(undefined);
    AsyncStorage.setItem(localStorageKey, 'valid-token');
    expect(await getToken()).toBe('valid-token');
    //Act
    const result = client('/401', {token: undefined}).then();
    //Assert
    await expect(result).rejects.toEqual('Please re-authenticate.');
    expect(await getToken()).toBe(undefined);
  });

  it('should get error when token is not exists in localStorage', async () => {
    //me api must provide a { token }, if not ,it will response with 200 and errorMessage
    const result = client('/me', {token: undefined}).then();
    expect(await result).toStrictEqual({
      errorMessage: 'Not authorized',
    });
  });
});
