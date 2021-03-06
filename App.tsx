/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

import {t} from 'react-native-tailwindcss';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAV}>
        <View
          style={[
            t.flex,
            t.justifyCenter,
            t.roundedLg,
            t.bgGray500,
            t.overflowHidden,
            t.itemsCenter,
            t.mT8,
          ]}>
          <Text style={[t.text4xl, t.bgRed300, t.roundedLg, t.pX4, t.pY2]}>
            Hello World!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAV: {},
  helloWorld: {
    fontSize: 48,
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
  },
});

export default App;
