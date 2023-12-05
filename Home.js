import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import BottomBar from './BottomBar';


const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/home/index');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchUsers();
    fetchCountries();
  }, []);

  const numColumns = 3;

  const handleEditProfile = (userId) => {
    // Navegar a la pantalla EditProfile
    navigation.navigate('EditProfile', { userId });
  }

  // Función para obtener el componente de círculo según la disponibilidad
  const getAvailabilityIndicator = (isAvailable) => (
    <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: isAvailable ? 'green' : 'gray' }} />
  );

  const renderUserCard = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => handleVideoCall(item)}>
      <Image source={{ uri: item.avatar }} style={styles.userImage} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userName}>{item.age}</Text>
      <Text style={styles.userName}>{item.country}</Text>
      {/* Agrega el indicador de disponibilidad */}
      {getAvailabilityIndicator(item.is_available)}
    </TouchableOpacity>
  );

  const handleVideoCall = (user) => {
    console.log(`Iniciando videollamada con ${user.name}`);
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios Disponibles</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
      >
        <Picker.Item label="Todos los países" value="" />
        {countries.map((country) => (
          <Picker.Item key={country} label={country} value={country} />
        ))}
      </Picker>
      <FlatList
        data={selectedCountry ? users.filter((user) => user.country === selectedCountry) : users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={renderUserCard}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.userList}
      />
      <BottomBar onPressEditProfile={handleEditProfile} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  userList: {
    marginTop: 16,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-between', // Añadido para distribuir el espacio verticalmente
  },

  userImage: {
    width: '100%', // Cambiado para ocupar el ancho completo de la celda
    aspectRatio: 1, // Añadido para mantener una relación de aspecto cuadrada
    borderRadius: 50,
    marginBottom: 8,
  },

  userName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
