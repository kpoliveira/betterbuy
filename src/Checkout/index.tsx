import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import styles from './style';
import { connect}  from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListProducts from '../components/ListProducts';
import { getAllProducts } from '../services/products';
import { useNavigation } from '@react-navigation/native';

interface Props{
    type: any
}

function RenderCheckout(type: any){
    console.log('------------')
    console.log(type.cartItems)
    const [text, onChangeText] = React.useState("");
    const [edit, setEdit] = useState(true);

    const navigation = useNavigation();

    const [state, setState] = useState({});
    async function callAPI() {
        const teste = await getAllProducts()
        setState(teste)
    }
    
      useEffect(() => {
        callAPI();
      }, []);
  return (
      <View style={{justifyContent: 'center'}}>
          <SafeAreaView style={styles.safeareadetails}>
            <View>
                <Text style={styles.textCheckout}>Checkout</Text>
            </View>

            <View>
                {type.cartItems.length > 0 ? 
                    <View style={styles.quantityText}>
                        <Text style={{color: '#A0A9C8'}}>
                            Você possui {type.cartItems.length} itens em seu carrinho
                        </Text>
                        <View style={{marginTop: hp('1%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableOpacity>
                                <Text style={{fontSize: 40}}>
                                    -
                                </Text>
                            </TouchableOpacity>

                            <Text style={{color: '#A0A9C8'}}>
                                Adicionar mais ou remover ?
                            </Text>

                            <TouchableOpacity>
                                <Text style={{fontSize: 30}}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={styles.quantityText}>
                        <Text style={{color: '#A0A9C8'}}>
                            Você não possui itens em seu carrinho
                        </Text>
                    </View>
                }
            </View>

            <View style={{marginTop: hp('10%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    editable={edit}
                    value={text}
                    placeholder={'Cupom de desconto'}
                    placeholderTextColor={'#A0A9C8'}
                />
                <TouchableOpacity onPress={() => setEdit(false)}>
                    <View style={styles.inputCupom}>
                        <Text style={{padding: hp('1%'), color: '#A0A9C8'}}>
                            Aplicar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('5%')}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#A0A9C8'}}>
                        Subtotal
                    </Text>

                    <Text style={{color: '#A0A9C8'}}>
                        159,99
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('3%')}}>
                    <Text style={{color: '#A0A9C8'}}>
                        Frete
                    </Text>

                    <Text style={{color: '#A0A9C8'}}>
                        Frete grátis
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('3%')}}>
                    <Text style={{color: '#A0A9C8'}}>
                        Total do pedido
                    </Text>

                    <Text style={{color: '#A0A9C8'}}>
                        159,99
                    </Text>
                </View>
            </View>

            <View>
                <Text style={{fontSize: hp('2%'), textAlign: 'center', marginTop: hp('5%'), fontWeight: 'bold'}}>
                    Frequentemente comprado juntos
                </Text>
                <ListProducts data={state}/>
            </View>

            <TouchableOpacity onPress={() => {setEdit(false); navigation.navigate('Approved')}}>
                <View style={styles.advancePage}>
                    <Text style={{padding: hp('1%'), color: 'white', fontWeight: 'bold',}}>
                        Avançar
                    </Text>
                </View>
            </TouchableOpacity>
          </SafeAreaView>
      </View>);
}

const mapStateToProps = (state: any) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        addItemToCart:(product: any) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RenderCheckout);