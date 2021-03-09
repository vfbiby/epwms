import AsyncStorage from '@react-native-async-storage/async-storage';

it('checks if Async Storage is used', async () => {
  await AsyncStorage.getItem('myKey');
  expect(AsyncStorage.getItem).toBeCalledWith('myKey');

  await AsyncStorage.setItem('token', 'some-valid-token');
  expect(await AsyncStorage.getItem('token')).toBe('some-valid-token');
});
