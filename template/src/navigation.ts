import {Navigation} from '@imports/react-native-navigation';
import ForgotPassword from '@components/auth/ForgotPassword';
import AccountScreen from './ui/pages/auth/account';
import LoginScreen from './ui/pages/auth/login';
import HomeScreen from './ui/pages/home';
import LandingScreen from './ui/pages/landing';

// Navigation
export const Screens = {
  1: {
    name: 'LoginScreen',
    Component: LoginScreen,
  },
  2: {
    name: 'ForgotPassword',
    Component: ForgotPassword,
  },
  3: {
    name: 'AccountScreen',
    Component: AccountScreen,
  },
  4: {
    name: 'HomeScreen',
    Component: HomeScreen,
  },
  5: {
    name: 'LandingScreen',
    Component: LandingScreen,
  },
};
export const NavigationTypes = {
  Drawer: () => {
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
  }, // OR
  BottomTabs: () => {
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
  },
  Unauth: () => {
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
  },
};
