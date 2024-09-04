import React from  'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  //função de autenticação
  const authentication = async () => {
    try{
      const userData = await AsyncStorage.getItem('user');

      if (userData !== null){
        const user = JSON.parse(userData);


        if(user.email === email && user.password === password){
          setMessage('Login realizado com sucesso!');
        }else{
          setMessage('Erro. Email ou senha incorretos.' + e)
        }


      }else{
        setMessage('Erro. Não encontramos o usuário.' + e )
      }



    } catch (e) {
      setMessage('Erro. Falha na autenticação do login.' + e)
    }
  }


  return (
    <View style={styles.container}>

      <Text style = {styles.title}>Login</Text>
      <TextInput style = {styles.input}
      placeholder = "Email"
      value={email}
      onChangeText = {setEmail}
      />

      <TextInput style = {styles.input}
      placeholder = "Senha"
      value={password}
      onChangeText = {setPassword}
      secureTextEntry
      />

     <Button title = "Entrar" onPress={authentication} style = {styles.button}/>
    
     {message ? <Text>{message}</Text> : null}
    
    
    
    
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
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
  button:{
    height: 30,
    width: 30,
  }, 
  title:{
    fontWeight:'bold',
  },
});
