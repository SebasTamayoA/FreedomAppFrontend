import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import axios from 'axios';

const EditProfile = ({ userId, onClose, navigation }) => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    country: '',
    gender: '',
    genderPreference: '',
    bio: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3001/users/${userId}`, userData);
      onClose();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    // Navegar a la vista Home
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={userData.name}
        onChangeText={(text) => setUserData({ ...userData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={userData.age.toString()}
        onChangeText={(text) => setUserData({ ...userData, age: parseInt(text, 10) })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="País"
        value={userData.country}
        onChangeText={(text) => setUserData({ ...userData, country: text })}
      />

      <Picker
        style={styles.picker}
        selectedValue={userData.gender}
        onValueChange={(value) => setUserData({ ...userData, gender: value })}
      >
        <Picker.Item label="Genero" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Picker
        style={styles.picker}
        selectedValue={userData.genderPreference}
        onValueChange={(value) =>
          setUserData({ ...userData, genderPreference: value })
        }
      >
        <Picker.Item label="Preferencia de genero" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Both" value="both" />
      </Picker>

      <TextInput
        style={styles.bioInput}
        placeholder="Biografía"
        multiline={true}
        numberOfLines={4}
        value={userData.bio}
        onChangeText={(text) => setUserData({ ...userData, bio: text })}
      />

      <Button title="Guardar" onPress={handleSave} style={styles.button} />
      <Button title="Cancelar" onPress={handleCancel} color="red" style={styles.cancelButton} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  bioInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  picker: {
    height: 40,
    width: '100%',
    marginBottom: 12,
    paddingLeft: 8,
  },
  button: {
    marginBottom: 12,
    padding: 10,
  },
  cancelButton: {
    marginTop: 24,  // Ajusta el margen vertical
    padding: 10,
    color: 'red',
  },
});

export default EditProfile;
