import {StyleSheet, ScrollView as ScrollViewNative} from 'react-native';
import React, {PropsWithChildren} from 'react';

// ---------------------------------------------------------------------------------------------------
export default function ScrollView({children}: PropsWithChildren) {
  return (
    <ScrollViewNative style={styles.root} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollViewNative>
  );
}

const styles = StyleSheet.create({root: {}});
