import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useForm} from 'react-hook-form';
//import {container} from 'tsyringe';
// @Modules
import AuthService from '@modules/authentication/application/service';
// @Components
import CardForm from '@components/auth/CardForm';
import TextInput from '@components/@forms/TextInput';
import useNavigation from '@hooks/useNavigation';
import {CardTitle} from '@components/core/card';
import Box from '@components/layout/Box';
import Button from '@components/core/Button';
import AuthBackground from '@components/auth/Background';
import injector from '@config/di';

interface FormData {
  email: string;
  password: string;
}
const MODAL_TYPE = {
  NONE: 0,
  FORGOT: 1,
  RESET: 2,
};
const implementation = injector.injectClass(AuthService);
//const implementation = container.resolve(AuthService);
export default function LoginScreen() {
  const {showModal} = useNavigation();
  const [isNewRegister, setIsNewRegister] = React.useState(false);
  // @Form
  const {
    handleSubmit,
    control,
    formState: {isSubmitting},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: FormData) => {
    try {
      if (isNewRegister) {
        await implementation.RegisterNewUser(data.email, data.password);
        ToastAndroid.show('Register success', ToastAndroid.SHORT);
      } else {
        await implementation.SignInWithEmail(data.email, data.password);
        ToastAndroid.show('Welcome', ToastAndroid.SHORT);
      }
    } catch (e) {
      ToastAndroid.show('Error', ToastAndroid.SHORT);
    }
  };
  // @Events
  function handleModal(show: boolean, type: number) {
    const name = (() => {
      if (type === MODAL_TYPE.FORGOT) {
        return 'ForgotPassword';
      }
      if (type === MODAL_TYPE.RESET) {
        return 'ResetPassword';
      }
      return null;
    })();
    if (name && show) {
      showModal(name);
    }
  }
  // @Animation
  const cardUpValue = React.useRef(new Animated.Value(1)).current;
  const cardDownValue = React.useRef(new Animated.Value(0)).current;
  function handleChangeView(value: boolean) {
    setIsNewRegister(value);
    if (value) {
      Animated.parallel([
        Animated.spring(cardUpValue, {
          toValue: 0,
          useNativeDriver: false,
        }),
        Animated.spring(cardDownValue, {
          toValue: 1,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(cardUpValue, {
          toValue: 1,
          useNativeDriver: false,
        }),
        Animated.spring(cardDownValue, {
          toValue: 0,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }
  const root = {
    paddingTop: isNewRegister ? 60 : 0,
    paddingBottom: isNewRegister ? 0 : 60,
  };
  const cardUp = {
    width: cardUpValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['80%', '100%'],
    }),
    position: isNewRegister ? 'absolute' : 'relative',
    zIndex: isNewRegister ? -1 : 1,
  };
  const cardTwo = {
    width: cardDownValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['80%', '100%'],
    }),
    position: isNewRegister ? 'relative' : 'absolute',
    zIndex: isNewRegister ? 1 : -1,
    bottom: 0,
  };
  return (
    <View style={styles.root}>
      <AuthBackground />
      <View style={[styles.container, root]}>
        <CardForm animation={cardUp}>
          <TouchableOpacity onPress={() => handleChangeView(false)}>
            <CardTitle title="SIGN IN" />
          </TouchableOpacity>
          {!isNewRegister && (
            <>
              <Box mb={8} />
              <TextInput
                control={control}
                name="email"
                label="Email"
                rules={{required: true}}
              />
              <TextInput
                label="Password"
                control={control}
                name="password"
                rules={{required: true}}
              />
              <Button
                title="START"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              />
              <Button
                title="FORGOT"
                onPress={() => handleModal(true, MODAL_TYPE.FORGOT)}
                disabled={isSubmitting}
              />
            </>
          )}
        </CardForm>
        <CardForm animation={cardTwo}>
          <TouchableOpacity onPress={() => handleChangeView(true)}>
            <CardTitle title="CREATE NEW" />
          </TouchableOpacity>
          {isNewRegister && (
            <>
              <Box mb={8} />
              <TextInput
                control={control}
                name="email"
                label="Email"
                rules={{required: true}}
              />
              <TextInput
                label="Password"
                control={control}
                name="password"
                rules={{required: true}}
              />
              <Button
                title="DONE"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              />
            </>
          )}
        </CardForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
});
