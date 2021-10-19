import { StyleSheet, Platform, StatusBar } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';


const styles = StyleSheet.create({
    boxHeader:{
        padding: wp('5%'),
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#18206F',
        paddingTop: hp('5%'),
    },
    column:{
        flexDirection: 'column',
        zIndex: 1 
    },
    textHeader:{
        paddingTop: hp('3%'),
        color: 'white'
    }
})

export default styles;