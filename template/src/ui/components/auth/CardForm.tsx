import React, {PropsWithChildren} from 'react';
import {StyleSheet, Animated} from 'react-native';
// modules
import {Card} from '@components/core/card';

interface Props {
  animation: any;
}
export default function CardForm({
  animation,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Animated.View style={[styles.card, animation]}>
      <Card>{children}</Card>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  card: {},
});
