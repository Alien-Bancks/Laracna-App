import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MoveControl() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Move Control</Text>
      <Text>Joysticks </Text>
      {}
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
