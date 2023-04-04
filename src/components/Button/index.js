import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button({ onPress, children }) {

  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{children}</Text>
    </TouchableOpacity>
  );
}
