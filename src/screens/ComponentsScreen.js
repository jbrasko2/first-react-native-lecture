import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Jordan'
  return (
    <View>
      <Text style={styles.firstStyle}>Getting started with React Native!</Text>
      <Text style={styles.secondStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstStyle: {
    fontSize: 45,
  },
  secondStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
