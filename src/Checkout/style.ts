import { StyleSheet, Platform, StatusBar } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';


const styles = StyleSheet.create({
    safeareadetails:{
        padding: hp('7%')
    },
    textCheckout:{
        fontSize: hp('3%')
    },
    quantityText:{
        marginTop: hp('5%')
    },
    input: {
        height: hp('4%'),
        width: wp('50%'),
        borderWidth: 1,
        borderRadius: 16,
        padding: 10,
        borderColor: '#18206F'
    },
    inputCupom:{
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#18206F',
        width: wp('15%'),
        alignItems: 'center'
    }
})

export default styles;