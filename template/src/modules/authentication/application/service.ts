import StorageRepository from '@modules/shared/domain/storage.repository';
import {inject, injectable} from 'tsyringe';
import AuthRepository from '../domain/auth.repository';

@injectable()
export default class AuthService {
  constructor(
    @inject('AuthRepository') private readonly repository: AuthRepository,
    @inject('StorageRepository') private readonly storage: StorageRepository,
  ) {}
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
  registerNewUser(email: string, password: string) {
    return this.repository.register(email, password);
  }
}
