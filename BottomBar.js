// BottomBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomBar = ({ onPressEditProfile }) => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity onPress={onPressEditProfile} style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      {/* ... (otros botones) */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default BottomBar;
