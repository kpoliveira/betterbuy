import { StyleSheet, Platform, StatusBar } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';


const styles = StyleSheet.create({
    viewItem:{
        marginTop: wp('2%'),
        marginLeft: wp('1%'), 
        marginRight: wp('2%'), 
        width: wp('30%'), 
        height: hp('25%'), 
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gray'
    },
    imageDetails:{
        width: wp('25%'), 
        height: hp('20%'), 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default styles;