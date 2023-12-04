import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:3001/login', {
      user: {
        email,
        password
      }
    });

    const authToken = response.data.token;
    await AsyncStorage.setItem('token', authToken);

    return true;
  } catch (error) {
    console.error('Error de inicio de sesión:', error);

    if (error.response) {
      // La solicitud fue realizada y el servidor respondió con un código de estado que no está en el rango de 2xx
      console.error('Respuesta del servidor:', error.response.data);
      console.error('Código de estado:', error.response.status);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió ninguna respuesta
      console.error('La solicitud fue realizada pero no se recibió ninguna respuesta');
      console.error('Detalles de la solicitud:', error.request);
    } else {
      // Algo sucedió en la configuración que impidió que se realizara la solicitud
      console.error('Error de configuración:', error.message);
    }

    throw error;
  }
};

const logout = async () => {
  await AsyncStorage.removeItem('token');
  return true;
};

const register = async (name, email, password) => {
  try {
    const response = await axios.post('http://127.0.0.1:3001/signup', {
      user: {
        name,
        email,
        password,
      },
    });

    const authToken = response.data.token;
    await AsyncStorage.setItem('token', authToken);

    return true;
  } catch (error) {
    console.error('Error de registro:', error);

    if (error.response) {
      // La solicitud fue realizada y el servidor respondió con un código de estado que no está en el rango de 2xx
      console.error('Respuesta del servidor:', error.response.data);
      console.error('Código de estado:', error.response.status);
    } else if (error.request) {
      // La solicitud fue realizada pero no se recibió ninguna respuesta
      console.error('La solicitud fue realizada pero no se recibió ninguna respuesta');
      console.error('Detalles de la solicitud:', error.request);
    } else {
      // Algo sucedió en la configuración que impidió que se realizara la solicitud
      console.error('Error de configuración:', error.message);
    }

    throw error;
  }
};

export { login, register, logout };

