import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View , Text, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';


function ListProducts (props: any){

    const navigation = useNavigation();

    const renderItem = ({item}:{item:any}) => (
        <View style={styles.viewItem}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('ProductPage', {data: item})}>
                <Image source={{uri:item.image}}
                style={styles.imageDetails}
                resizeMode={'center'}/>
                {/* <Text>{item.title}</Text> */}
                <Text style={{textAlign: 'center'}}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
            data={props.data.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true} />
        </View>
    );
}

export default ListProducts;