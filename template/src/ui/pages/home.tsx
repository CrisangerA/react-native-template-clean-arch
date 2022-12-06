import {FlatList, Image, RefreshControl, StyleSheet, View} from 'react-native';
import React from 'react';
// modules
import Http from '@modules/shared/infrastructure/http.implementation';
import AuthUseCase from '@modules/authentication/application/useCase';
import {ApiResponse} from '@modules/shared/domain/model';
// components
import {Page, Padding} from '@components/layout';
import {Text, Button} from '@components/core';
import {MainStyles} from '@components/core/styles';
// other
import {COINGECKO_API_ROUTES, RICKMORTY_API_ROUTES} from '@config/api.routes';
import injector from '@config/di';
import useQuery from '@hooks/useQuery';
import {Theme} from '@config/styles';

// ---------------------------------------------------------------------
const useCase = injector.injectClass(AuthUseCase);
const http = injector.injectClass(Http);

const ITEM_SIZE = Theme.image.avatar.size + 8;
function OptmimisticList({data, isLoading}: any) {
  return (
    <FlatList
      style={styles.list}
      horizontal
      refreshControl={<RefreshControl refreshing={isLoading} />}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item: {name, image}}) => {
        return (
          <Padding p={4}>
            <Image source={{uri: image}} style={MainStyles.imageAvatar} />
            <Text text={name} />
          </Padding>
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
  const [user] = React.useState(useCase.GetCurrentUser());
  const {data: coingeko, isLoading: loadA} = useQuery<ApiResponse>({
    key: [COINGECKO_API_ROUTES.coins.markets],
    service: () =>
      http.Get(COINGECKO_API_ROUTES.root + COINGECKO_API_ROUTES.coins.markets),
  });
  const {data: rickmorty, isLoading: loadB} = useQuery<ApiResponse>({
    key: [RICKMORTY_API_ROUTES.characters],
    service: () =>
      http.Get(RICKMORTY_API_ROUTES.root + RICKMORTY_API_ROUTES.characters),
  });
  // @Events
  async function onPress() {
    await useCase.Logout();
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
});
