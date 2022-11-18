//import {container} from 'tsyringe';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
// modules
import LocalStorage from '@modules/shared/infrastructure/localStorage';
// components
import Page from '@components/layout/Page';
import Text from '@components/core/Text';
import Button from '@components/core/Button';
import Box from '@components/layout/Box';
import Http from '@modules/shared/infrastructure/http.implementation';
import COINGECKO_API_ROUTES from 'src/config/api.routes';
import useQuery from '@hooks/useQuery';
import injector from '@config/di';

//const implementation = container.resolve(LocalStorage);
const implementation = injector.injectClass(LocalStorage);
const http = injector.injectClass(Http);

export default function HomeScreen() {
  // @Hooks
  const [user, setUser] = React.useState<string | null>('');
  const {data, isLoading} = useQuery({
    key: [COINGECKO_API_ROUTES.coins.markets],
    service: () => http.Get(COINGECKO_API_ROUTES.coins.markets),
  });
  // @Logic
  implementation.GetStoredLocalData('user').then(setUser);
  // @Events
  async function onPress() {
    await auth().signOut();
  }
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
        <Button type="outlined" title="Cerrar Sesión" onPress={onPress} />
        <Box m={5}>
          <Box mb={12} />
          <Text text={JSON.stringify(user)} />
          <Box mb={12} />
          {isLoading && <ActivityIndicator />}
          <Text text={JSON.stringify(data)} />
          <Box mb={12} />
        </Box>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  root: {},
});
