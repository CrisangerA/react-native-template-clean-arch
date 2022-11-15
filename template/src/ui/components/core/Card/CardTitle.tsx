import {StyleSheet, Text} from 'react-native';
import React from 'react';

const CardTitle = ({title}: {title: string}) => {
  return <Text style={styles.cardTitle}>{title}</Text>;
};

export default CardTitle;

const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#212121',
  },
});
