import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllProducts } from './src/services/products';

export default function App() {

  const [state, setState] = useState({});

  function callAPI() {
    const teste = getAllProducts()
      teste.then(function(resolve){
        const result = resolve
        // console.log('-------------------------------------')
        // console.log(result)
        // const result = JSON.stringify(resolve)
        setState(result)
        // console.log(result)
        return result
      })
    }

    useEffect(() => {
      callAPI()
    }, []);

    // console.log(`${(state as any).data[0].description}`)
    console.log('-------------------------------------')
    // console.log(state.data[0])
    // console.log('oi')

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* {state !== undefined ? <Text>{`${(state as any).data[0].description}`}</Text> : <Text>Oi</Text>} */}
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
