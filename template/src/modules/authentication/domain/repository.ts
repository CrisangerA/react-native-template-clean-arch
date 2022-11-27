import User from './model';

export default interface AuthRepository {
  SignInWithEmail(email: string, password: string): Promise<User>;
  SignInAnonymously(): Promise<User>;
  ForgotPassword(email: string): Promise<void>;
  ResetPassword(code: string, newPassword: string): Promise<void>;
  Register(email: string, password: string): Promise<User>;
  GetCurrentUser(): User | null;
  Logout(): Promise<void>;
}
