// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home'; // Importa tu componente Home
import LoginSignup from './LoginSignup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>


      <Stack.Navigator

        initialRouteName="LoginSignup">


        <Stack.Screen

          name="LoginSignup"

          component={LoginSignup} />
        <Stack.Screen name="Home" component={Home} />
        {/* Agrega otras pantallas según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
