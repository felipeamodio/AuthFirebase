import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Products from '../../components/Products';
import styles from './styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.texto}>Usuário: teste@email.com</Text>

      <Products nome="Tênis" preco="200,00" />
      <Products nome="Camisa" preco="100,00" />
      <Products nome="Suplementos" preco="150,00" />
     </View>
  );
}
