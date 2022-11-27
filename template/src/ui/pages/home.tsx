import {FlatList, Image, RefreshControl, StyleSheet, View} from 'react-native';
import React from 'react';
// modules
import Http from '@modules/shared/infrastructure/http.implementation';
import AuthService from '@modules/authentication/application/service';
// components
import Page from '@components/layout/Page';
import Text from '@components/core/Text';
import Button from '@components/core/Button';
// other
import {COINGECKO_API_ROUTES, RICKMORTY_API_ROUTES} from '@config/api.routes';
import injector from '@config/di';
import useQuery from '@hooks/useQuery';

// ---------------------------------------------------------------------
const authService = injector.injectClass(AuthService);
const http = injector.injectClass(Http);

function OptmimisticList({data, isLoading}: any) {
  const ITEM_SIZE = 60;
  return (
    <FlatList
      style={styles.list}
      horizontal
      refreshControl={<RefreshControl refreshing={isLoading} />}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item: {name, image}}) => {
        return (
          <View style={{width: ITEM_SIZE}}>
            <Image source={{uri: image}} style={styles.image} />
            <Text text={name} />
          </View>
        );
      }}
      getItemLayout={(_, index) => ({
        index,
        length: ITEM_SIZE,
        offset: ITEM_SIZE * index,
      })}
    />
  );
}

export default function HomeScreen() {
  // @Hooks
  const [user] = React.useState(authService.GetCurrentUser());
  const {data: coingeko, isLoading: loadA} = useQuery({
    key: [COINGECKO_API_ROUTES.coins.markets],
    service: () =>
      http.Get(COINGECKO_API_ROUTES.root + COINGECKO_API_ROUTES.coins.markets),
  });
  const {data: rickmorty, isLoading: loadB} = useQuery({
    key: [RICKMORTY_API_ROUTES.characters],
    service: () =>
      http.Get(RICKMORTY_API_ROUTES.root + RICKMORTY_API_ROUTES.characters),
  });
  // @Events
  async function onPress() {
    await authService.Logout();
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
        <Text text={JSON.stringify(user)} />
        <OptmimisticList data={coingeko?.data} isLoading={loadA} />
        <OptmimisticList data={rickmorty?.data.results} isLoading={loadB} />
        <OptmimisticList data={coingeko?.data} isLoading={loadA} />
        <OptmimisticList data={rickmorty?.data.results} isLoading={loadB} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  root: {},
  list: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
});
