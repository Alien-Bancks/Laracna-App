import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';  

import MoveControl from './screen/MoveControl';
import MotorControl from './screen/MotorControl';
import Configuration from './screen/Configuration';
import FilesAndLogs from './screen/FilesAndLogs';

const Stack = createStackNavigator();

function App() {
  const [perna, setPerna] = useState('');
  const [motor, setMotor] = useState('');

  const enviarComando = () => {
    if (!perna || !motor) {
      Alert.alert('Erro', 'Preencha os campos!');
    } else {
      Alert.alert('Comando Enviado', `Perna: ${perna}, Motor: ${motor}`);
    }
  };

  const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
      <Text style={styles.title}>Controle dos Motores</Text>

      <TextInput
        style={styles.input}
        value={perna}
        onChangeText={setPerna}
      />

      <TextInput
        style={styles.input}
        value={motor}
        onChangeText={setMotor}
      />

      <TouchableOpacity style={styles.sendButton} onPress={enviarComando}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoveControl')}>
          <Text style={styles.buttonText}>Move Control</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MotorControl')}>
          <Text style={styles.buttonText}>Motor Control</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuration')}>
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FilesAndLogs')}>
          <Text style={styles.buttonText}>Arquivos e Logs</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoveControl" component={MoveControl} />
        <Stack.Screen name="MotorControl" component={MotorControl} />
        <Stack.Screen name="Configuration" component={Configuration} />
        <Stack.Screen name="FilesAndLogs" component={FilesAndLogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1.5,  
  },
  input: {
    height: 50,
    width: '85%',
    borderColor: '#3498db',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 25, 
    backgroundColor: '#ecf0f1',  
    fontSize: 16,
    color: '#2C3E50',
    elevation: 3,  
  },
  sendButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '70%',  
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,  
  },
  navigationButtons: {
    marginTop: 20,
    width: '85%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#34495e',  // contraste
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
