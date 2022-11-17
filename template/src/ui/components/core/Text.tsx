import {Text as NativeText} from 'react-native';
import React from 'react';
import {textStyles as styles} from './styles';
interface Props {
  text: string;
  type: 'button' | 'text' | 'input' | 'pageTitle' | 'title' | 'subtitle';
}
const Text = ({text, type}: Props) => {
  const style = [styles.text, styles[type]];
  return <NativeText style={style}>{text}</NativeText>;
};
Text.defaultProps = {
  type: 'text',
};
export default Text;
