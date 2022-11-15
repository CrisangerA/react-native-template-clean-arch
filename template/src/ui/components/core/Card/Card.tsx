import {Animated, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

export default function Card({children}: PropsWithChildren<any>) {
  return <Animated.View style={[styles.root]}>{children}</Animated.View>;
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
