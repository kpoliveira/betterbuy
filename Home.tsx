import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform } from 'react-native';
import { getAllProducts } from './src/services/products';
import Header from './src/components/Header';
import ListProducts from './src/components/ListProducts';

import Loader from './src/components/Loader/loader';

interface Props {
  title: any;
  item: any;
}

export default function Home() {

  const [state, setState] = useState({});
  const [load, setLoad] = useState(true)

  async function callAPI() {
    const teste = await getAllProducts()
    setState(teste)
    setLoad(false)
    console.log('--- RUNNING APPLICATION ---')
    // console.log(state.data)
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
      <View>
        {load == true ?
          <Loader loading={load}/>
          :
          <View>
            <Header type={'home'}/>
            <ListProducts data={state}/>
          </View>
        }
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
