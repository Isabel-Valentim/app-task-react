import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const storeAccount = async () => {
    try {
      const user = { name, lastName, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setMessage('Sua conta foi criada com sucesso!');
    } catch (e) {
      console.log(e); // Adicionei um log para ver o erro no console
      setMessage('Erro. Falha ao salvar os dados de cadastro.' + e);
    }
  };

  const fetchAccount = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        const user = JSON.parse(userData);
        setName(user.name);
        setLastName(user.lastName);
        setEmail(user.email);
        setPassword(user.password);
      }
    } catch (e) {
      console.log(e); // Adicionei um log para ver o erro no console
      setMessage('Erro. Falha ao carregar os dados do usuário' + e);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Criar Conta" onPress={storeAccount} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40, 
    paddingHorizontal: 10, 
    borderWidth: 1,
    borderColor: '#ccc', 
    color: 'black', 
    fontSize: 16, 
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
