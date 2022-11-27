import StorageRepository from '@modules/shared/domain/repository/storage.repository';
import AuthRepository from '../domain/repository';

export default class AuthService {
  constructor(
    private readonly repository: AuthRepository,
    private readonly storage: StorageRepository,
  ) {}
  public static inject = ['AuthRepository', 'StorageRepository'] as const;

  async SignInWithEmail(email: string, password: string) {
    const user = await this.repository.SignInWithEmail(email, password);
    this.storage.StoreLocalData('user', JSON.stringify(user));
    return user;
  }
  async SignInAnonymously() {
    const user = await this.repository.SignInAnonymously();
    this.storage.StoreLocalData('user', JSON.stringify(user));
    return user;
  }
  async ForgotPassword(email: string) {
    return this.repository.ForgotPassword(email);
  }
  async ResetPassword(code: string, newPassword: string) {
    return this.repository.ResetPassword(code, newPassword);
  }
  async RegisterNewUser(email: string, password: string) {
    const user = await this.repository.Register(email, password);
    this.storage.StoreLocalData('user', JSON.stringify(user));
    return user;
  }
  async Logout() {
    return this.repository.Logout();
  }
  GetCurrentUser() {
    return this.repository.GetCurrentUser();
  }
}
