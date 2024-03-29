import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View , Text, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';
import {connect} from 'react-redux'



function ListProducts (props: any){

    const navigation = useNavigation();
    // console.log(props.data.data)

    const renderItem = ({item}:{item:any}) => (
        <View style={styles.viewItem}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('ProductPage', {data: item, all: props.data.data})}>
                <Image source={{uri:item.image}}
                style={styles.imageDetails}
                resizeMode={'center'}/>
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
            data={props.data.data}
            renderItem={renderItem}
            // keyExtractor={item => item.id}
            horizontal={true} />
        </View>
    );
}

export default ListProducts;