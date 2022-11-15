import 'reflect-metadata';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import auth from '@react-native-firebase/auth';
// Providers
import WrapApp from './App';
// Screens
import LoginScreen from './src/ui/pages/auth/login';
import LandingScreen from './src/ui/pages/landing';
import HomeScreen from './src/ui/pages/home';
import AccountScreen from 'src/ui/pages/auth/account';
import ForgotPassword from '@components/auth/ForgotPassword';

// Navigation
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

// Screens
Navigation.registerComponent(
  'LandingScreen',
  () => props =>
    (
      <WrapApp {...props}>
        <LandingScreen {...props} />
      </WrapApp>
    ),
  () => LandingScreen,
);
Navigation.registerComponent(
  'LoginScreen',
  () => props =>
    (
      <WrapApp {...props}>
        <LoginScreen {...props} />
      </WrapApp>
    ),
  () => LoginScreen,
);
Navigation.registerComponent(
  'ForgotPassword',
  () => props =>
    (
      <WrapApp {...props}>
        <ForgotPassword {...props} />
      </WrapApp>
    ),
  () => ForgotPassword,
);
// Auth
Navigation.registerComponent(
  'HomeScreen',
  () => props =>
    (
      <WrapApp {...props}>
        <HomeScreen {...props} />
      </WrapApp>
    ),
  () => HomeScreen,
);
Navigation.registerComponent(
  'AccountScreen',
  () => props =>
    (
      <WrapApp {...props}>
        <AccountScreen {...props} />
      </WrapApp>
    ),
  () => AccountScreen,
);
// Types
const navigationDrawer = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: 'AuthStack',
            children: [
              {
                component: {
                  name: 'HomeScreen',
                },
              },
            ],
          },
        },
        left: {
          component: {
            name: 'AccountScreen',
          },
        },
      },
    },
  });
};
const navigationBottomTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'HomeScreen',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'AccountScreen',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};
// Launch App
Navigation.events().registerAppLaunchedListener(() => {
  auth().onAuthStateChanged(user => {
    if (user) {
      navigationDrawer();
    } else {
      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: 'LandingScreen',
                },
              },
            ],
          },
        },
      });
    }
  });
});
