import StorageRepository from '@modules/shared/domain/repository/storage.repository';
import AuthRepository from '../domain/repository';

export default class AuthService {
  constructor(
    private readonly repository: AuthRepository,
    private readonly storage: StorageRepository,
  ) {}
  public static inject = ['AuthRepository', 'StorageRepository'] as const;
  async signInWithEmail(email: string, password: string) {
    const user = await this.repository.signInWithEmail(email, password);
    this.storage.StoreLocalData('user', JSON.stringify(user));
    return user;
  }
  async signInAnonymously() {
    const user = await this.repository.signInAnonymously();
    this.storage.StoreLocalData('user', JSON.stringify(user));
    return user;
  }
  forgotPassword(email: string) {
    return this.repository.forgotPassword(email);
  }
  resetPassword(code: string, newPassword: string) {
    return this.repository.resetPassword(code, newPassword);
  }
  async registerNewUser(email: string, password: string) {
    const user = await this.repository.register(email, password);
    this.storage.StoreLocalData('user', JSON.stringify(user));
    return user;
  }
}
