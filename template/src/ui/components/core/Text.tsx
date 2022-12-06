import {
  StyleProp,
  Text as NativeText,
  TextStyle,
  TextProps,
} from 'react-native';
import React from 'react';
import {textStyles as styles} from './styles';
type Props = {
  text: string;
  type:
    | 'button'
    | 'text'
    | 'input'
    | 'pageTitle'
    | 'title'
    | 'subtitle'
    | 'link';
  style?: StyleProp<TextStyle> | undefined;
} & TextProps;
const Text = ({text, type, style: styleProp}: Props) => {
  const style = [styles.text, styles[type], styleProp];
  return <NativeText style={style}>{text}</NativeText>;
};
Text.defaultProps = {
  type: 'text',
};
export default Text;
