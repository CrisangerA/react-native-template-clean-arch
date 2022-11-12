import {
  Navigation,
  NavigationComponentProps,
} from '@imports/react-native-navigation';
import React from 'react';
import {createContext, PropsWithChildren} from 'react';

// ---------------------------------------------------------------------------------------------------
interface Props {
  componentId: string;
  goTo: (screen: string) => void;
}
const initialState: Props = {
  componentId: '',
  goTo: () => {},
};
const NavigationContext = createContext<Props>(initialState);

function NavigationProvider({
  componentId,
  children,
}: PropsWithChildren<NavigationComponentProps>) {
  function goTo(screen: string) {
    Navigation.push(componentId, {
      //Navigation.push('AuthStack', {
      component: {
        name: screen,
        options: {
          sideMenu: {
            left: {
              visible: false,
            },
          },
        },
      },
    });
  }
  return (
    <NavigationContext.Provider
      value={{
        componentId,
        goTo,
      }}>
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationContext, NavigationProvider};
