import { View, Text } from 'react-native';
import styles from './styles';

export default function Product({ nome, preco }) {

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>R$ {preco}</Text>
    </View>
  );
}
