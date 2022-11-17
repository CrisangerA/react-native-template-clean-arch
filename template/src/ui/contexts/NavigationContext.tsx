import {
  Navigation,
  NavigationComponentProps,
} from '@imports/react-native-navigation';
import React from 'react';
import {createContext, PropsWithChildren} from 'react';

// ---------------------------------------------------------------------------------------------------
interface Props {
  componentId: string;
  goTo: (screen: string, props?: any) => void;
  showModal: (name: string, props?: any) => void;
  dismissModal: () => void;
}
const initialState: Props = {
  componentId: '',
  goTo: () => {},
  showModal: () => {},
  dismissModal: () => {},
};
const NavigationContext = createContext<Props>(initialState);

function NavigationProvider({
  componentId,
  children,
}: PropsWithChildren<NavigationComponentProps>) {
  function goTo(screen: string, props?: any) {
    Navigation.push(componentId, {
      //Navigation.push('AuthStack', {
      component: {
        name: screen,
        passProps: props,
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
  function showModal(name: string, props?: any) {
    Navigation.showModal({
      component: {
        name,
        passProps: props,
      },
    });
  }
  function dismissModal() {
    Navigation.dismissModal(componentId);
  }
  return (
    <NavigationContext.Provider
      value={{
        componentId,
        goTo,
        showModal,
        dismissModal,
      }}>
      {children}
    </NavigationContext.Provider>
  );
}

export {NavigationContext, NavigationProvider};
