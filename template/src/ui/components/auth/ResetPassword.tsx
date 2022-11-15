import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ResetPassword() {
  return (
    <View style={styles.root}>
      <Text>ResetPassword</Text>
      <Text style={styles.label}>Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  label: {},
});
