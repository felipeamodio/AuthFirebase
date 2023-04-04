import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Header({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lista de produtos</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.replace('Login')}>
        <Icon 
          name={'log-out'} 
          size={20} 
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );
}
