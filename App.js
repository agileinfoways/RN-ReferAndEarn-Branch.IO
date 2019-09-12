/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage
} from 'react-native';

import { createStackNavigator, createNavigationContainer } from 'react-navigation';
import SignUp from './src/screen/SignUp';
import ReferAndEarn from './src/screen/ReferAndEarn';
import FlipLogIn from './src/screen/FlipLogIn';



const AppNavigator = createStackNavigator({

  Login: {screen: FlipLogIn},
  SignUp: {screen: SignUp, navigationOptions: { title: 'SignUp', headerStyle: {
    backgroundColor: '#FE474C',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  },}},
  Refer: {screen: ReferAndEarn, navigationOptions: { title: 'ReferAndEarn',
  headerStyle: {
    backgroundColor: '#FE474C',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
}},
})


export default createNavigationContainer(AppNavigator);

