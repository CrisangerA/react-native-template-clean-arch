import {container} from 'tsyringe';
import FirebaseRepository from '@modules/authentication/infrastructure/firebase.repository';
import LocalStorage from '@modules/shared/infrastructure/localStorage';

export default function dependencyInjection() {
  container.register('AuthRepository', {
    useClass: FirebaseRepository,
  });
  container.register('StorageRepository', {
    useClass: LocalStorage,
  });
}
