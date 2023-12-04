import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const usersData = [
  {
    id: '1',
    name: 'Usuario 1',
    image: 'https://source.unsplash.com/100x100/?person', // Ejemplo de URL de Unsplash
  },
  {
    id: '2',
    name: 'Usuario 2',
    image: 'https://source.unsplash.com/100x100/?portrait', // Ejemplo de URL de Unsplash
  },
  // Agrega más usuarios
  {
    id: '3',
    name: 'Usuario 3',
    image: 'https://source.unsplash.com/100x100/?people', // Ejemplo de URL de Unsplash
  },
  {
    id: '4',
    name: 'Usuario 4',
    image: 'https://source.unsplash.com/100x100/?person', // Ejemplo de URL de Unsplash
  },
  {
    id: '5',
    name: 'Usuario 5',
    image: 'https://source.unsplash.com/100x100/?portrait', // Ejemplo de URL de Unsplash
  },
  {
    id: '6',
    name: 'Usuario 6',
    image: 'https://source.unsplash.com/100x100/?people', // Ejemplo de URL de Unsplash
  },
  {
    id: '7',
    name: 'Usuario 7',
    image: 'https://source.unsplash.com/100x100/?person', // Ejemplo de URL de Unsplash
  },
  {
    id: '8',
    name: 'Usuario 8',
    image: 'https://source.unsplash.com/100x100/?portrait', // Ejemplo de URL de Unsplash
  },
  {
    id: '9',
    name: 'Usuario 9',
    image: 'https://source.unsplash.com/100x100/?people', // Ejemplo de URL de Unsplash
  },
  {
    id: '10',
    name: 'Usuario 10',
    image: 'https://source.unsplash.com/100x100/?person', // Ejemplo de URL de Unsplash
  },
  {
    id: '11',
    name: 'Usuario 11',
    image: 'https://source.unsplash.com/100x100/?portrait', // Ejemplo de URL de Unsplash
  },
  {
    id: '12',
    name: 'Usuario 12',
    image: 'https://source.unsplash.com/100x100/?people', // Ejemplo de URL de Unsplash
  },
  {
    id: '13',
    name: 'Usuario 13',
    image: 'https://source.unsplash.com/100x100/?person', // Ejemplo de URL de Unsplash
  },
  {
    id: '14',
    name: 'Usuario 14',
    image: 'https://source.unsplash.com/100x100/?portrait', // Ejemplo de URL de Unsplash
  }
];


const Home = () => {
  const numColumns = 3;

  const renderUserCard = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => handleVideoCall(item)}>
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <Text style={styles.userName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleVideoCall = (user) => {
    // Lógica para iniciar una videollamada con el usuario seleccionado
    console.log(`Iniciando videollamada con ${user.name}`);
    // Puedes navegar a otra pantalla, mostrar un modal, etc.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuarios Disponibles</Text>
      <FlatList
        data={usersData}
        keyExtractor={(item) => item.id}
        renderItem={renderUserCard}
        numColumns={numColumns} // Muestra 3 usuarios por fila
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.userList}
      />
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
    // centrar texto
    textAlign: 'center'
  },
  userList: {
    marginTop: 16,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  userImage: {
    width: '20%',
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  userName: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
