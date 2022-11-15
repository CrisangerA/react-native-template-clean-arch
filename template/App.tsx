import React, {PropsWithChildren} from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import dependencyInjection from 'src/di';
import {NavigationProvider} from 'src/ui/contexts/NavigationContext';

// -----------------------------------------------------
// If you want implement a custom Wrapper auth here as example <AuthProvider />
dependencyInjection();
const WrapApp = ({
  componentId,
  children,
}: PropsWithChildren<NavigationComponentProps>) => {
  return (
    <NavigationProvider componentId={componentId}>
      {children}
    </NavigationProvider>
  );
};

export default WrapApp;
