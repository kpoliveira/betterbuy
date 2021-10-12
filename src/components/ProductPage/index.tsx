import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Header';
import { connect } from 'react-redux';

// import { Container } from './styles';
import styles from './styles';

const ProductPage: React.FC = (props: any) => {
    //QUALQUER ERRO REMOVER ANY DA PROP
    const data = props.route.params.data

    console.log(data)
  return (
      <View>
          <Header type={'productpage'} />
          <View style={styles.firstView}>
              <View style={{alignItems: 'center'}}>
                <Image source={{uri:data.image}}
                    style={styles.imageDetails}
                    resizeMode={'center'}/>
              </View>
            <Text style={styles.titleTextDetails}>{data.title}</Text>
            <Text style={styles.descriptionTextDetails}>{data.description}</Text>
          </View>
          <View style={styles.secondView}>
            <Text style={styles.titleTextDetails}>Adicionar ao carrinho</Text>
          </View>
      </View>
  );
}

export default connect()(ProductPage);