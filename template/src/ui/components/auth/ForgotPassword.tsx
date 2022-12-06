import {Text, ToastAndroid} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import AuthUseCase from '@modules/authentication/application/useCase';
import useNavigation from '@hooks/useNavigation';
import injector from '@config/di';
import {Button, CardTitle} from '@components/core';
import TextInput from '@components/@forms/TextInput';
import ModalBottomSheet from '@components/layout/ModalBottomSheet';

interface FormData {
  email: string;
  newPassword: string;
  code: string;
}
const useCase = injector.injectClass(AuthUseCase);
export default function ForgotPassword() {
  const {dismissModal} = useNavigation();
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
      await useCase.ForgotPassword(data.email);
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
    <ModalBottomSheet>
      <CardTitle title="Olvido Contraseña?" />
      <Text>
        Ingresa tu email y te enviaremos un link para que puedas reestablecer tu
        contraseña
      </Text>
      <TextInput label="Email" control={control} name="email" />

      <Button
        title="SEND EMAIL"
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      />
    </ModalBottomSheet>
  );
}
