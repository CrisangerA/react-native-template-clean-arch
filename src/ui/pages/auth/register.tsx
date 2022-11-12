import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function RegisterScreen() {
  return (
    <View style={styles.root}>
      <Text>RegisterScreen</Text>
      <Button title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {backgroundColor: 'red', flex: 1},
});
