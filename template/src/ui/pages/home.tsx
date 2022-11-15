import {container} from 'tsyringe';
import auth from '@react-native-firebase/auth';
import {StyleSheet, View} from 'react-native';
import React from 'react';
// modules
import LocalStorage from '@modules/shared/infrastructure/localStorage';
// components
import Page from '@components/layout/Page';
import Text from '@components/core/Text';
import Button from '@components/core/Button';
import Box from '@components/layout/Box';

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
        <Text
          type="pageTitle"
          text="Welcome !!! | React Native | Native Template"
        />
        <Text type="title" text="Home Screen" />
        <Text type="subtitle" text="* Hermes Engine" />
        <Text type="subtitle" text="* React Native Turbo Modules" />
        <Text type="subtitle" text="* Animations between screens" />
        <Box mb={12} />
        <Text text={JSON.stringify(user)} />
        <Box mb={12} />
        <Button type="outlined" title="Cerrar Sesión" onPress={onPress} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  root: {},
});
