import {StyleSheet, SafeAreaView} from 'react-native';
import React, {PropsWithChildren} from 'react';

export default function Page({children}: PropsWithChildren) {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 10},
});
