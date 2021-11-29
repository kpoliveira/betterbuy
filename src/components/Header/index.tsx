import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { connect}  from 'react-redux'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
// import { Container } from './styles';

interface Props{
    type: any
}

function RenderHeader(type: any){
    const navigation = useNavigation();
    switch(type.type){
        case 'home':
            return(
                <SafeAreaView>
                    <View style={styles.boxHeader}>
                        <View style={styles.column}>
                            <TouchableOpacity>
                                <FontAwesome5 name="bars" size={22} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.textHeader}>Seja bem-vindo !</Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                                <View style={{position: 'absolute', height: 15, width: 15, borderRadius: 15, backgroundColor: 'red', right: 5, bottom: 20, alignItems: 'center', justifyContent: 'center', zIndex: 5000}}>
                                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                                        {type.cartItems.length}
                                    </Text>
                                </View>
                                <Entypo name="shopping-cart" size={34} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            );
        case 'productpage':
            return(
                <SafeAreaView>
                    <View style={styles.boxHeader}>
                        <View style={styles.column}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <FontAwesome5 name="chevron-left" size={22} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.textHeader}>Seja bem-vindo !</Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                                <View style={{position: 'absolute', height: 15, width: 15, borderRadius: 15, backgroundColor: 'red', right: 5, bottom: 20, alignItems: 'center', justifyContent: 'center', zIndex: 5000}}>
                                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                                        {type.cartItems.length}
                                    </Text>
                                </View>
                                <Entypo name="shopping-cart" size={34} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            );
        default:
            return(<View />)
    }
}

const mapStateToProps = (state: any) => {
    return {
        cartItems: state
    }
}

const Header = ( props: Props ) => {
    console.log(props)
    return RenderHeader(props);
};

export default connect(mapStateToProps)(Header);