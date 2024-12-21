import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <Button title="Move Control" onPress={() => navigation.navigate('MoveControl')} />
      <Button title="Motor Control" onPress={() => navigation.navigate('MotorControl')} />
      <Button title="Configuration" onPress={() => navigation.navigate('Configuration')} />
      <Button title="Files and Logs" onPress={() => navigation.navigate('FilesAndLogs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
