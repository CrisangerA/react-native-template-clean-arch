import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useNavigation from '@hooks/useNavigation';
import Page from '@components/layout/Page';
import {textStyles} from '@components/layout/styles';

export default function LandingScreen() {
  const {goTo} = useNavigation();

  return (
    <Page>
      <View style={styles.root}>
        <Text style={textStyles.title}>React Native | Native Template</Text>
        <Text style={textStyles.subtitle}>Landing Screen</Text>
        <Text style={textStyles.subtitle}>Hermes Engine</Text>
        <Text style={textStyles.subtitle}>React Native Turbo Modules</Text>
        <Text style={textStyles.subtitle}>Animations between screens</Text>

        <Button title="Login" onPress={() => goTo('LoginScreen')} />
        <Button title="Register" onPress={() => goTo('RegisterScreen')} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  root: {},
});
