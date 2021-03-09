import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {t} from 'react-native-tailwindcss';

export const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[t.bgGray300, t.minHFull]}>
        <View style={[t.pX4]}>
          <View
            style={[
              t.pY4,
              t.flex,
              t.pX4,
              t.itemsCenter,
              t.flexRow,
              t.justifyBetween,
            ]}>
            <View style={[t.w1_2]}>
              <View>
                <Text style={[t.text2xl]}>古道东风破</Text>
              </View>
              <View>
                <Text style={[t.textSm, t.textGray600]}>
                  Phone: 15336551131
                </Text>
              </View>
            </View>
            <View style={[t.w12, t.h12, t.roundedFull, t.bgRed300]}></View>
          </View>
          <View style={[t.bgGray100, t.p4, t.roundedLg]}>
            <Text style={[t.textGray600]}>发货 / 出库</Text>
            <View style={[t.flex, t.flexRow, t.mT4]}>
              <View
                style={[
                  t.w1_4,
                  t.overflowHidden,
                  t.flex,
                  t.flexCol,
                  t.itemsCenter,
                  t.justifyCenter,
                ]}>
                <View style={[t.h12, t.w12, t.roundedFull, t.bgBlue500]}></View>
                <Text style={[t.mT2, t.textSm]}>订单拣货</Text>
              </View>
              <View
                style={[
                  t.w1_4,
                  t.overflowHidden,
                  t.flex,
                  t.flexCol,
                  t.itemsCenter,
                  t.justifyCenter,
                ]}>
                <View style={[t.h12, t.w12, t.roundedLg, t.bgGreen400]}></View>
                <Text style={[t.mT2, t.textSm]}>波次拣货</Text>
              </View>
              <View
                style={[
                  t.w1_4,
                  t.overflowHidden,
                  t.flex,
                  t.flexCol,
                  t.itemsCenter,
                  t.justifyCenter,
                ]}>
                <View style={[t.h12, t.w12, t.roundedLg, t.bgRed400]}></View>
                <Text style={[t.mT2, t.textSm]}>波次播种</Text>
              </View>
              <View
                style={[
                  t.w1_4,
                  t.overflowHidden,
                  t.flex,
                  t.flexCol,
                  t.itemsCenter,
                  t.justifyCenter,
                ]}>
                <View style={[t.h12, t.w12, t.roundedLg, t.bgYellow400]}></View>
                <Text style={[t.mT2, t.textSm]}>验货</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
