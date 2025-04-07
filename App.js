import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerRootComponent } from 'expo';

// telas
import MoveControl from './screen/MoveControl';
import MotorControl from './screen/MotorControl';
import Configuration from './screen/Configuration';
import FilesAndLogs from './screen/FilesAndLogs';
import Servo from './screen/Servo';
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Move"
        screenOptions={{
          tabBarActiveTintColor: '#e74c3c',
          tabBarInactiveTintColor: '#bdc3c7',
          tabBarStyle: { backgroundColor: '#2C3E50', paddingBottom: 5 },
          headerStyle: { backgroundColor: '#2C3E50' },
          headerTintColor: 'white',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen name="Servo" component={Servo} />
        <Tab.Screen name="Move" component={MoveControl} />
        <Tab.Screen name="Motor" component={MotorControl} />
        <Tab.Screen name="Config" component={Configuration} />
        <Tab.Screen name="Logs" component={FilesAndLogs} />
      </Tab.Navigator>
      <StatusBar style="auto" />
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
