import AuthRepository from '@modules/authentication/domain/repository';
import auth from '@react-native-firebase/auth';
import User, {UserValues} from '../domain/model';

export default class FirebaseRepository implements AuthRepository {
  ForgotPassword(email: string) {
    return auth().sendPasswordResetEmail(email);
  }
  ResetPassword(code: string, newPassword: string) {
    return auth().confirmPasswordReset(code, newPassword);
  }

  SignInWithEmail(email: string, password: string) {
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
  SignInAnonymously() {
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
  Register(email: string, password: string) {
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

  GetCurrentUser() {
    const user = auth().currentUser;
    return new UserValues({
      uid: user?.uid || '',
      username: user?.displayName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      photoURL: user?.photoURL || '',
    });
  }
  Logout() {
    return auth().signOut();
  }
}
