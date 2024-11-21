import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TugasP2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lintang Ananda</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'maroon',
  },
});

export default TugasP2;