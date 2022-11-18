import React from 'react';
import {Navigation} from '@imports/react-native-navigation';
import auth from '@react-native-firebase/auth';
// Providers
import WrapApp from './App';
// Screens
import {NavigationTypes, Screens} from './src/config/navigation';

// Launch App
class ReactApp {
  constructor() {
    this.NavigationConfig();
    this.NavigationScreens();
  }
  NavigationScreens() {
    Object.values(Screens).map(({name, Component}) =>
      Navigation.registerComponent(
        name,
        () => props =>
          (
            <WrapApp {...props}>
              <Component {...props} />
            </WrapApp>
          ),
        () => Component,
      ),
    );
  }
  NavigationConfig() {
    Navigation.setDefaultOptions({
      topBar: {
        visible: false,
      },
      statusBar: {
        //backgroundColor: 'transparent',
      },
      animations: {
        push: {
          content: {
            enter: {
              translationX: {
                from: require('react-native').Dimensions.get('window').width,
                to: 0,
                duration: 500,
                interpolation: {
                  type: 'decelerateAccelerate',
                },
              },
            },
          },
        },
        pop: {
          content: {
            exit: {
              translationX: {
                from: 0,
                to: require('react-native').Dimensions.get('window').width,
                duration: 500,
                interpolation: {
                  type: 'spring',
                },
              },
            },
          },
        },
      },
      bottomTabs: {
        //visible: false,
      },
      hardwareBackButton: {
        popStackOnPress: false,
      },
      modalPresentationStyle: 'overCurrentContext',
      layout: {
        backgroundColor: 'transparent',
      },
    });
  }
  Start() {
    Navigation.events().registerAppLaunchedListener(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          NavigationTypes.Drawer();
        } else {
          NavigationTypes.Unauth();
        }
      });
    });
  }
}

new ReactApp().Start();
