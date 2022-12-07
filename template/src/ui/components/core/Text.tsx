import {
  StyleProp,
  Text as NativeText,
  TextStyle,
  TextProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Theme} from '@config/styles';
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
const Text = ({text, type, style}: Props) => {
  const styles = [textStyles.text, textStyles[type], style];
  return <NativeText style={styles}>{text}</NativeText>;
};
Text.defaultProps = {
  type: 'text',
};
export default Text;

export const textStyles = StyleSheet.create({
  text: {
    color: Theme.color.text,
  },
  button: {
    color: Theme.color.primary,
    fontSize: Theme.text.size.button,
    textAlign: 'center',
    fontWeight: Theme.text.weight.button as any,
  },
  input: {
    fontSize: Theme.text.size.input,
    marginBottom: Theme.layout.margin(1),
    color: Theme.color.input,
  },
  pageTitle: {
    color: Theme.color.primary,
    fontSize: Theme.text.size.pageTitle,
    fontWeight: 'bold',
  },
  title: {
    fontSize: Theme.text.size.title,
    fontWeight: Theme.text.weight.title as any,
  },
  subtitle: {
    fontSize: Theme.text.size.subtitle,
  },
  link: {
    fontStyle: 'italic',
    color: Theme.color.primary,
  },
});
