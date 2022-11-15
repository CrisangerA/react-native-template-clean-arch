import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Text from './Text';

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
  const style = [styles.root, styles[type]];
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <Text type="button" text={title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 10,
  },
  transparent: {
    elevation: 0,
  },
  outlined: {},
});
