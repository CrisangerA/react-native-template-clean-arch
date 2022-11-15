import User from './model';

export default interface AuthRepository {
  signInWithEmail(email: string, password: string): Promise<User>;
  signInAnonymously(): Promise<User>;
  forgotPassword(email: string): Promise<void>;
  resetPassword(code: string, newPassword: string): Promise<void>;
  register(email: string, password: string): Promise<User>;
  //getCurrentUser(): Promise<User>;
}
