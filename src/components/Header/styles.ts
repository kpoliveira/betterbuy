import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    boxHeader:{
        padding: wp('5%'),
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    column:{
        flexDirection: 'column'
    },
    textHeader:{
        paddingTop: wp('5%'),
    }
})

export default styles;
