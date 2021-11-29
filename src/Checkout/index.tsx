import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './style';
import { connect}  from 'react-redux'

interface Props{
    type: any
}

function RenderCheckout(type: any){
    console.log('------------')
    console.log(type.cartItems)
  return (
      <View>
          <SafeAreaView style={styles.safeareadetails}>
            <View>
                <Text style={styles.textCheckout}>Checkout</Text>
            </View>

            <View>
                <Text>
                    {type.cartItems}
                </Text>
            </View>
          </SafeAreaView>
      </View>);
}

const mapStateToProps = (state: any) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(RenderCheckout);