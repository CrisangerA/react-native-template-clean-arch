import {container} from 'tsyringe';
import auth from '@react-native-firebase/auth';
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// modules
import LocalStorage from '@modules/shared/infrastructure/localStorage';
// components
import FancyButton from '@components/core/Button';
import {textStyles} from '@components/layout/styles';
import Page from '@components/layout/Page';

const implementation = container.resolve(LocalStorage);

export default function LandingScreen() {
  const [user, setUser] = React.useState<string | null>('');
  async function onPress() {
    await auth().signOut();
  }
  implementation.GetStoredLocalData('user').then(setUser);
  return (
    <Page>
      <View style={styles.root}>
        <Text style={textStyles.title}>React Native | Native Template</Text>
        <Text style={textStyles.subtitle}>Home Screen</Text>
        <Text style={textStyles.subtitle}>Hermes Engine</Text>
        <Text style={textStyles.subtitle}>React Native Turbo Modules</Text>
        <Text style={textStyles.subtitle}>Animations between screens</Text>
        <Text>{user}</Text>
        <Button title="Logout" onPress={onPress} />
        <FancyButton />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  root: {},
});
