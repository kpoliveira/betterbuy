import { StyleSheet, Platform, StatusBar } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';


const styles = StyleSheet.create({
    safeareadetails:{
        padding: hp('7%')
    },
    textCheckout:{
        fontSize: hp('3%')
    }
})

export default styles;