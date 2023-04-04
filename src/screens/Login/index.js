import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Input 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />
      
      <Button onPress={() => navigation.navigate('Principal')}>LOGAR</Button>
      <Button 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Button>
    </View>
  );
}
