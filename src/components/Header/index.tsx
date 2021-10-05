import React from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import { Container } from './styles';

const Header: React.FC = () => {
  return  (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <View style={styles.boxHeader}>
            <View style={styles.column}>
                <Entypo name="chevron-left" size={24} color="black" />
                <Text style={styles.textHeader}>Seja bem-vindo !</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text>Teste</Text>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default Header;