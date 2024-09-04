import React from 'react';
import { StyleSheet, View } from 'react-native';

// or any files within the Snack
import Login from '../task/components/Login';
import Cadastro from '../task/components/Cadastro';

export default function App() {
  return (
    <View style = {styles.container}>
      <Cadastro/>
      <Login/>
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
});
