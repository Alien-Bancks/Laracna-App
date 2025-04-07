import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function ServoTest() {
  const [pata, setPata] = useState('');
  const [motor, setMotor] = useState('');
  const [angle, setAngle] = useState('');

  const enviarComando = () => {
    if (!pata || !motor || !angle) {
      Alert.alert('Erro', 'Preencha todos os campos!');
    } else {
      Alert.alert('Comando enviado', `Pata: ${pata}\nMotor: ${motor}\nÂngulo: ${angle}°`);
      // adicionar a lógica para enviar o comando real ao robô
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pata:</Text>
      <Picker
        selectedValue={pata}
        onValueChange={(itemValue) => setPata(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione uma pata" value="" />
        <Picker.Item label="RT - Right Top" value="RT" />
        <Picker.Item label="RB - Right Bottom" value="RB" />
        <Picker.Item label="LT - Left Top" value="LT" />
        <Picker.Item label="LB - Left Bottom" value="LB" />
      </Picker>

      <Text style={styles.label}>Motor:</Text>
      <Picker
        selectedValue={motor}
        onValueChange={(itemValue) => setMotor(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um motor" value="" />
        <Picker.Item label="Coxa" value="coxa" />
        <Picker.Item label="Femur" value="femur" />
        <Picker.Item label="Tibia" value="tibia" />
      </Picker>

      <Text style={styles.label}>Angle:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={angle}
        onChangeText={setAngle}
        placeholder="Ex: 90°"
      />

      <View style={styles.button}>
        <Button title="Enviar" onPress={enviarComando} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  picker: {
    height: 50,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ecf0f1',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e74c3c',
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 10,
  },
});
