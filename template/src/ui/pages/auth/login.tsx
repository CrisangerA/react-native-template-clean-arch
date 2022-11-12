import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Modal as RNNModal} from 'react-native-navigation';
import {container} from 'tsyringe';
// modules
import AuthService from '@modules/authentication/application/service';

type FormData = {
  firstName: string;
  lastName: string;
};

const implementation = container.resolve(AuthService);

export default function LoginScreen() {
  const {
    handleSubmit,
    control,
    reset,
    formState: {isSubmitting},
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const [showModal, setShowModal] = React.useState(false);
  const onSubmit = async (data: any) => {
    try {
      await implementation.signInWithEmail(data.firstName, data.lastName);
    } catch (e) {}
  };
  async function anonymus() {
    try {
      await implementation.signInAnonymously();
    } catch (e) {}
  }
  function forgot() {
    setShowModal(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={text => onChange(text)}
            value={value}
          />
        )}
        name="firstName"
        rules={{required: true}}
      />
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={text => onChange(text)}
            value={value}
          />
        )}
        name="lastName"
        rules={{required: true}}
      />

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={() => {
            reset({
              firstName: 'Bill',
              lastName: 'Luo',
            });
          }}
        />
      </View>
      <Text style={{color: 'red'}}>{isSubmitting ? 'Cargando' : 'Noting'}</Text>
      <View style={styles.button}>
        <Button
          title="With Email and Password"
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </View>
      <Button title="Anonymus" onPress={anonymus} disabled={isSubmitting} />
      <Button
        title="Forgot Password"
        onPress={forgot}
        disabled={isSubmitting}
      />
      <RNNModal
        //onShow={/* optional callback */}
        //animationType={/* optional, 'none' | 'fade' | 'slide', default 'slide'*/}
        //blurOnUnmount={/* optional, default false */}
        //transparent={/* optional, default false, true behaves as overCurrentContext */}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <Button
          title="Dismiss declared Modal"
          //testID={DISMISS_MODAL_BTN}
          onPress={() => setShowModal(false)}
        />
        <Text style={styles.label}>First name</Text>
      </RNNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
