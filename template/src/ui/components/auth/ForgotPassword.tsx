import {
  Animated,
  BackHandler,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React from 'react';
import TextInput from '@components/@forms/TextInput';
import {useForm} from 'react-hook-form';
//import {container} from 'tsyringe';
import AuthService from '@modules/authentication/application/service';
import {BlurView} from '@react-native-community/blur';
import delay from '@modules/shared/domain/utils';
import useNavigation from '@hooks/useNavigation';
import Button from '@components/core/Button';
import {CardTitle} from '@components/core/Card';
import injector from '@config/di';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
interface FormData {
  email: string;
  newPassword: string;
  code: string;
}
const implementation = injector.injectClass(AuthService);
export default function ForgotPassword() {
  const {dismissModal} = useNavigation();
  //const [showModal, setShowModal] = React.useState(true);
  const opacity = React.useRef(new Animated.Value(0)).current;
  function handleBack() {
    Animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: false,
      duration: 236,
    }).start();
    delay(236).then(() => {
      dismissModal();
    });
  }
  React.useEffect(() => {
    delay(200).then(() => {
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    });
    const a = BackHandler.addEventListener('hardwareBackPress', () => {
      handleBack();
      return true;
    });
    return a.remove;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // @Form
  const {
    handleSubmit,
    control,
    formState: {isSubmitting},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      code: '',
      newPassword: '',
    },
  });
  const onSubmit = async (data: FormData) => {
    try {
      await implementation.ForgotPassword(data.email);
      ToastAndroid.show('Email enviado. Revisa tu email', ToastAndroid.SHORT);
      dismissModal();
    } catch (e: any) {
      if (e.code === 'auth/user-not-found') {
        ToastAndroid.show('Email not found', ToastAndroid.SHORT);
      }
      if (e.code === 'auth/invalid-action-code') {
        ToastAndroid.show('Invalid code', ToastAndroid.SHORT);
      }
    }
  };
  return (
    <View style={styles.root}>
      <AnimatedBlurView style={[styles.absolute, {opacity}]} blurType="light" />
      <View style={styles.container}>
        <CardTitle title="Olvido Contraseña?" />
        <Text>
          Ingresa tu email y te enviaremos un link para que puedas reestablecer
          tu contraseña
        </Text>
        <TextInput label="Email" control={control} name="email" />

        <Button
          title="SEND EMAIL"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </View>
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
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(175, 255, 255, 0.1)',
  },
});
