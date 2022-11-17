import {TouchableOpacity} from 'react-native';
import React from 'react';
import Text from './Text';
import {buttonStyles as styles} from './styles';
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
