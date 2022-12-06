import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';
import {useController} from 'react-hook-form';
import Text from '@components/core/Text';
import {Theme} from '@config/styles';
// --------------------------------------------------------------------------------------
type Props = {
  label: string;
  control?: any;
  name: string;
  rules?: any;
} & TextInputProps;
export default function TextInput({name, label, rules, ...props}: Props) {
  const {
    fieldState: {error},
    field: {onBlur, onChange, value},
  } = useController({name, rules});
  return (
    <View style={styles.root}>
      <Text type="input" text={label} />
      <NativeTextInput
        style={styles.input}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        {...props}
      />
      {error && (
        <Text
          type="input"
          text={error.message || error.type}
          style={styles.error}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
  },
  input: {
    borderRadius: 4,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    fontSize: Theme.text.size.input,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: Theme.color.input,
  },
  error: {
    color: 'red',
    textTransform: 'capitalize',
  },
});
