import {Text} from 'react-native';
import React from 'react';
import {cardStyles as styles} from '../styles';

const CardTitle = ({title}: {title: string}) => {
  return <Text style={styles.cardTitle}>{title}</Text>;
};

export default CardTitle;
