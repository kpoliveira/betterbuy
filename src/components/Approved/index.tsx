import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image } from 'react-native';
import styles from './styles';
import { connect}  from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListProducts from '../ListProducts';
import { getAllProducts } from '../../services/products';
import { useNavigation } from '@react-navigation/native';

interface Props{
    type: any
}

function Approved(){
    console.log('------------')
    const navigation = useNavigation();
  return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Image source={require('../../../assets/ink.png')}/>
          <Text style={{fontWeight: 'bold', fontSize: hp('2%'), marginTop: hp('3%')}}>
            Pagamento Aprovado !
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.advancePage}>
                <Text style={{padding: hp('1%'), color: 'white', fontWeight: 'bold', paddingHorizontal: wp('10%')}}>
                    Voltar para a home !
                </Text>
            </View>
        </TouchableOpacity>
      </View>);
}

export default Approved;