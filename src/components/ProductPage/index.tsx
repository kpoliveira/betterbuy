import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Header';
import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';
import styles from './styles';
import ListProducts from '../ListProducts/index';

const mapDispatchToProps = (dispatch: any) => {
  return{
      addItemToCart:(product: any) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

function ProductPage(props: any){
    //QUALQUER ERRO REMOVER ANY DA PROP
    const data = props.route.params.data
    console.log('--------------------------')
    console.log(props.route.params.data)
    // console.log(props)
  return (
      <View style={{backgroundColor: 'white'}}>
          <Header type={'productpage'} />
          <View style={styles.firstView}>
              <View style={{alignItems: 'center'}}>
                <Image source={{uri:data.image}}
                    style={styles.imageDetails}
                    resizeMode={'center'}/>
              </View>
            <Text style={styles.titleTextDetails}>{data.title}</Text>
            <Text style={styles.descriptionTextDetails}>{data.description}</Text>
          </View>
          <View style={styles.secondSeasonView}>
            <TouchableOpacity onPress={props.addItemToCart}>
              <View style={styles.secondView}>
                <Text style={styles.textAddCart}>Adicionar ao carrinho</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
}

export default connect(null, mapDispatchToProps)(ProductPage);