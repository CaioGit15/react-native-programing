import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
  age: number;
};

export default function CardUser({ name, age }: Props) {
  return (
    <View style={styles.card}>
      <Text>Nome: {name}</Text>
      <Text>Idade: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10
  }
});