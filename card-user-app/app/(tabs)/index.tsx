import { View, StyleSheet } from 'react-native';
import CardUser from '../../components/CardUser';

export default function Index() {
  return (
    <View style={styles.container}>

      <CardUser
        name="João"
        age={18}
      />

      <CardUser
        name="Maria"
        age={22}
      />

      <CardUser
        name="Carlos"
        age={30}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});