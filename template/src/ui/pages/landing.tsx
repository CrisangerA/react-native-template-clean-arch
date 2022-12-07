import {View} from 'react-native';
import React from 'react';
import useNavigation from '@hooks/useNavigation';
import Page from '@components/layout/Page';
import Text from '@components/core/Text';
import Button from '@components/core/Button';
import Box from '@components/layout/Box';
import AuthBackground from '@components/auth/Background';

export default function LandingScreen() {
  const {goTo} = useNavigation();

  return (
    <Page>
      <AuthBackground />
      <View>
        <Text type="pageTitle" text="React Native | Native Template" />
        <Text type="title" text="Landing Screen" />
        <Text type="subtitle" text="* Hermes Engine" />
        <Text type="subtitle" text="* React Native Turbo Modules" />
        <Text type="subtitle" text="* Animations between screens" />
        <Box mb={12} />
        <Button
          type="outlined"
          title="Empezar"
          onPress={() => goTo('LoginScreen')}
        />
      </View>
    </Page>
  );
}
