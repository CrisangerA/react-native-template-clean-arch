import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@components/core';
import {MainStyles} from '@components/core/styles';

// ---------------------------------------------------------------------------------------------------
export default function NotRecords() {
  return (
    <View style={styles.root}>
      <Text text="No records found" />
    </View>
  );
}

const styles = StyleSheet.create({root: MainStyles.p5});
