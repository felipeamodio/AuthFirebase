import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles';

export default function Register({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

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

      <Input
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
      />
      
      <Button onPress={() => {}}>CADASTRAR</Button>
    </View>
  );
}
