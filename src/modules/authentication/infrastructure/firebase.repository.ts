import AuthRepository from '@modules/authentication/domain/auth.repository';
import auth from '@react-native-firebase/auth';
import {singleton} from 'tsyringe';
import User, {UserValues} from '../domain/model';

@singleton()
export default class FirebaseRepository implements AuthRepository {
  forgotPassword(email: string) {
    return auth().sendPasswordResetEmail(email);
  }
  resetPassword(code: string, newPassword: string) {
    return auth().confirmPasswordReset(code, newPassword);
  }
  signInWithEmail(email: string, password: string) {
    return new Promise<User>((resolve, reject) =>
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res =>
          resolve(
            new UserValues({
              uid: res.user.uid,
              username: res.user.displayName,
              email: res.user.email,
              phoneNumber: res.user.phoneNumber,
              photoURL: res.user.photoURL,
            }),
          ),
        )
        .catch(reject),
    );
  }

  signInAnonymously() {
    return new Promise<User>((resolve, reject) =>
      auth()
        .signInAnonymously()
        .then(res =>
          resolve(
            new UserValues({
              uid: res.user.uid,
              username: res.user.displayName,
              email: res.user.email,
              phoneNumber: res.user.phoneNumber,
              photoURL: res.user.photoURL,
            }),
          ),
        )
        .catch(reject),
    );
  }
  register(email: string, password: string) {
    return new Promise<User>((resolve, reject) =>
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res =>
          resolve(
            new UserValues({
              uid: res.user.uid,
              username: res.user.displayName,
              email: res.user.email,
              phoneNumber: res.user.phoneNumber,
              photoURL: res.user.photoURL,
            }),
          ),
        )
        .catch(reject),
    );
  }
}
