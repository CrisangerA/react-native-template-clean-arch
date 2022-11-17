import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Theme} from '@config/styles';

export default function AuthBackground() {
  // Background
  const squareUp = {
    transform: [{rotate: '45deg'}, {translateX: -230}, {translateY: 10}],
    width: 400,
    height: 450,
    top: 0,
  };
  const borderUp = {
    transform: [{rotate: '45deg'}, {translateX: 120}, {translateY: -180}],
    top: 0,
  };
  const squareDown = {
    transform: [{rotate: '45deg'}, {translateX: 200}, {translateY: -100}],
    bottom: 0,
  };
  const borderDown = {
    transform: [{rotate: '45deg'}, {translateX: 180}, {translateY: -250}],
    bottom: 0,
  };
  return (
    <View style={styles.squareContainer}>
      <View style={[styles.square, squareUp]} />
      <View style={[styles.border, borderUp]} />
      <View style={[styles.square, squareDown]} />
      <View style={[styles.border, borderDown]} />
    </View>
  );
}

const styles = StyleSheet.create({
  squareContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  square: {
    position: 'absolute',
    backgroundColor: Theme.color.primary,
    width: 200,
    height: 200,
    borderRadius: 30,
    elevation: 10,
  },
  border: {
    borderColor: Theme.color.secondary,
    borderWidth: 12,
    width: 100,
    height: 100,
    borderRadius: 20,
    position: 'absolute',
  },
});
