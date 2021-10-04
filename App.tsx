import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllProducts } from './src/services/products';

import Loader from './src/components/Loader/loader';

export default function App() {

  const [state, setState] = useState({});
  const [load, setLoad] = useState(true)

  async function callAPI() {
    const teste = await getAllProducts()
    setState(teste)
    setLoad(false)
    }

    useEffect(() => {
      callAPI()
    }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* {state !== JSON.stringify(state) ? <Text>{`${(state as any)}`}</Text> : <Text>Oi</Text>} */}
      {load == true ?
        <Loader loading={load}/>
        :
        <Text>{state.data[0].description}</Text>
      }
      {/* <Text>getAllProducts.</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
