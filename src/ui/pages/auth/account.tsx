import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useNavigation from '@hooks/useNavigation';

export default function AccountScreen() {
  const {goTo} = useNavigation();
  return (
    <View style={styles.root}>
      <Text>AccountScreen</Text>
      <Button
        title="AccountScreen | Click me"
        onPress={() => goTo('AccountScreen')}
      />
      <Button
        title="Home Screen | Click me"
        onPress={() => goTo('HomeScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {backgroundColor: 'red', flex: 1},
});
