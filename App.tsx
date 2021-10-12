import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform } from 'react-native';
import { getAllProducts } from './src/services/products';
import Header from './src/components/Header';
import ListProducts from './src/components/ListProducts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loader from './src/components/Loader/loader';
import Home from './Home';
import ProductPage from './src/components/ProductPage';

import { Provider } from 'react-redux';
import store from './src/services/Redux/store';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home" >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='ProductPage' component={ProductPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    );
  }
