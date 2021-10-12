import { StyleSheet, Platform, StatusBar } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts, Poppins_100Thin } from '@expo-google-fonts/poppins';


const styles = StyleSheet.create({
    firstView:{
        backgroundColor: 'white',
        // alignItems: 'center',
        paddingHorizontal: hp('3%')
    },
    imageDetails:{
        width: wp('40%'), 
        height: hp('40%'), 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titleTextDetails:{
        fontSize: hp('2%'),
    },
    descriptionTextDetails:{
        marginTop: hp('1%'),
        fontSize: hp('1.5%'),
        marginBottom: hp('1%'),
    },
    secondView:{
        
        paddingHorizontal: hp('3%'),
        marginTop: hp('3%'),
        alignItems: 'center'
    }
})

export default styles;