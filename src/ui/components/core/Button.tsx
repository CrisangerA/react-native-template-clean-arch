import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FancyButton() {
  return (
    <TouchableOpacity style={styles.root}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {},
});
