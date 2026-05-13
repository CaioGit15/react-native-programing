import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Perfil() {

  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://i.pravatar.cc/150'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        Meu Perfil
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Salvar
        </Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        Nome: {nome}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  resultado: {
    marginTop: 20,
    fontSize: 18
  }
});