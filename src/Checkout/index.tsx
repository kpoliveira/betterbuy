import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import styles from './style';
import { connect}  from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props{
    type: any
}

function RenderCheckout(type: any){
    console.log('------------')
    console.log(type.cartItems)
    const [text, onChangeText] = React.useState("");
    const [edit, setEdit] = useState(true);
  return (
      <View>
          <SafeAreaView style={styles.safeareadetails}>
            <View>
                <Text style={styles.textCheckout}>Checkout</Text>
            </View>

            <View>
                {type.cartItems.length > 0 ? 
                    <View style={styles.quantityText}>
                        <Text>
                            Você possui {type.cartItems.length} itens em seu carrinho
                        </Text>
                        <View style={{marginTop: hp('1%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableOpacity>
                                <Text style={{fontSize: 40}}>
                                    -
                                </Text>
                            </TouchableOpacity>

                            <Text>
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
                        <Text>
                            Você não possui itens em seu carrinho
                        </Text>
                    </View>
                }
            </View>

            <View style={{marginTop: hp('5%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    editable={edit}
                    value={text}
                    placeholder={'Cupom de desconto'}
                    placeholderTextColor={'#18206F'}
                />
                <TouchableOpacity onPress={() => setEdit(false)}>
                    <View style={styles.inputCupom}>
                        <Text style={{padding: hp('1%')}}>
                            Aplicar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
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