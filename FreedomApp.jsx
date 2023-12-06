import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login, register } from './Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FreedomApp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
    await login(email, password);
    const userId = await AsyncStorage.getItem('userId');
    navigation.navigate('Home', { userId });
  };

  const handleRegistration = async () => {
    if (password !== passwordConfirmation) {
      console.log('La contraseña y la confirmación no coinciden');
      return;
    }
    await register(name, email, password);
    navigation.navigate('Home');
  };

  const onSubmit = async () => {
    try {
      isLogin ? handleLogin() : handleRegistration();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('/assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>{isLogin ? 'Inicio de sesión' : 'Registro'}</Text>
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={setName}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          onChangeText={setPasswordConfirmation}
          secureTextEntry={true}
        />
      )}
      <Button
        title={isLogin ? 'Iniciar sesión' : 'Registrarse'}
        onPress={onSubmit}
        style={styles.button}
      />
      <Text
        style={styles.toggleText}
        onPress={() => setIsLogin(!isLogin)}
      >
        {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  toggleText: {
    color: 'blue',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 500,
    height: 200,
    marginTop: 50,
    marginBottom: 50,
  },
});

export default FreedomApp;
