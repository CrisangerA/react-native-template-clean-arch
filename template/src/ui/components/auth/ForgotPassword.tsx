import {BackHandler, StyleSheet, Text, ToastAndroid, View} from 'react-native';
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

interface FormData {
  email: string;
  newPassword: string;
  code: string;
}
const implementation = injector.injectClass(AuthService);
//const implementation = container.resolve(AuthService);
export default function ForgotPassword() {
  const {dismissModal} = useNavigation();
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    delay(236).then(() => setShowModal(true));
    const a = BackHandler.addEventListener('hardwareBackPress', () => {
      setShowModal(false);
      return false;
    });
    return a.remove;
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
      await implementation.forgotPassword(data.email);
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
      {showModal && <BlurView style={styles.absolute} blurType="light" />}
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
