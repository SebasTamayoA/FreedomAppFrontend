// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'; // Importa tu componente Home
import FreedomApp from './FreedomApp';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FreedomApp">
        <Stack.Screen
          name="FreedomApp"
          component={FreedomApp} />
        <Stack.Screen name="Home" component={Home} />
        {/* Agrega más pantallas según sea necesario */}
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
