import {StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  mb: number;
}
const Box = ({mb}: Props) => {
  const style = [styles.root];
  if (mb) {
    style.push({marginBottom: mb});
  }
  return <View style={style} />;
};

export default Box;

const styles = StyleSheet.create({
  root: {},
});
