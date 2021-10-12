import React, { useState } from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

interface Props{
    type: any
}

function RenderHeader(type: any){
    const navigation = useNavigation();

    switch(type){
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
                            <TouchableOpacity onPress={() => console.log('pressionou')}>
                                <Entypo name="shopping-cart" size={24} color="white" />
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
                            <TouchableOpacity onPress={() => console.log('pressionou')}>
                                <Entypo name="shopping-cart" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            );
        default:
            return(<View />)
    }
}

const Header = ( props: Props ) => {
    console.log(props)
    return RenderHeader(props.type);
};

export default Header;