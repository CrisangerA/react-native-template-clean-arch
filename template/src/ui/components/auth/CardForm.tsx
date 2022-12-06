import React, {PropsWithChildren} from 'react';
import {StyleSheet, Animated} from 'react-native';
// modules
import {Card} from '@components/core/card';
import {FormProvider} from 'react-hook-form';

interface Props {
  animation: any;
  methods: any;
}
export default function CardForm({
  animation,
  methods,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Animated.View style={[styles.card, animation]}>
      <FormProvider {...methods}>
        <Card>{children}</Card>
      </FormProvider>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  card: {},
});
