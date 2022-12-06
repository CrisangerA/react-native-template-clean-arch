import {Animated, BackHandler, StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {BlurView} from '@react-native-community/blur';
import {delay} from '@modules/shared/domain/utils';
import useNavigation from '@hooks/useNavigation';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
// ---------------------------------------------------------------------------------------------------
export default function ModalBottomSheet({children}: PropsWithChildren) {
  const {dismissModal} = useNavigation();
  const opacity = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    function handleBack() {
      Animated.timing(opacity, {
        toValue: 0,
        useNativeDriver: false,
        duration: 200,
      }).start();
      delay(200).then(() => {
        dismissModal();
      });
    }
    delay(200).then(() => {
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
        duration: 200,
      }).start();
    });
    const event = BackHandler.addEventListener('hardwareBackPress', () => {
      handleBack();
      return true;
    });
    return () => {
      event.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.root}>
      <AnimatedBlurView style={[styles.blurView, {opacity}]} blurType="dark" />
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 30,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(175, 255, 255, 0.1)',
  },
});
