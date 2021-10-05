import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform } from 'react-native';
import { getAllProducts } from './src/services/products';
import Header from './src/components/Header';

import Loader from './src/components/Loader/loader';

interface Props {
  title: any;
  item: any;
}

export default function App() {

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
      callAPI()
    }, []);

    const renderItem = ({ item }:{item:any}) => (
      // <Item title={item.title} />
      <View>
        <Text>{item.title}</Text>
      </View>
    );

  return (
      <View>
        <Header />
        {/* <View>
          <Text>Oi</Text>
        </View> */}
      </View>
      //  <SafeAreaView>
      //   {load == true ?
      //     <Loader loading={load}/>
      //     :
      //     <View>
      //       <FlatList
      //         data={state.data}
      //         renderItem={renderItem}
      //         keyExtractor={(item) => item.id.toString()}
      //       />

      //       <Text>{`${(state as any).data[0].title}`}</Text>
      //       <Image source={{uri:`${(state as any).data[0].image}`}}
      //       style={{width: 400, height: 400}}
      //       resizeMode={'center'}/>
      //       <Text>{`${(state as any).data[0].description}`}</Text>

      //     </View>
      //   }
      // </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
