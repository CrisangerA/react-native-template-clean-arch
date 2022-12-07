import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from './Text';
import {Theme} from '@config/styles';
interface Props {
  type: 'root' | 'transparent' | 'outlined';
  title: string;
  onPress: () => void;
  disabled?: boolean;
}
Button.defaultProps = {
  type: 'transparent',
};
export default function Button({type, title, onPress, disabled}: Props) {
  const style = [buttonStyles.root, buttonStyles[type]];
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <Text type="button" text={title} />
    </TouchableOpacity>
  );
}
export const buttonStyles = StyleSheet.create({
  root: {
    padding: Theme.layout.padding(3),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: Theme.layout.borderRadius(3),
    elevation: 10,
  },
  transparent: {
    elevation: 0,
  },
  outlined: {},
});
