import {StyleSheet, Text as NativeText} from 'react-native';
import React from 'react';

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

const styles = StyleSheet.create({
  text: {
    color: '#212121',
  },
  button: {
    color: '#f50057',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    fontSize: 12,
    marginBottom: 4,
    color: '#212121',
  },
  pageTitle: {
    color: '#212121',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
});
