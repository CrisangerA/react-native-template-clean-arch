//import {container} from 'tsyringe';
import {createInjector, Scope} from 'typed-inject';
import FirebaseRepository from '@modules/authentication/infrastructure/firebase.repository';
import LocalStorage from '@modules/shared/infrastructure/localStorage';
import COINGECKO_API_ROUTES from './api.routes';

// export default function dependencyInjection() {
//   container.register('AuthRepository', {
//     useClass: FirebaseRepository,
//   });
//   container.register('StorageRepository', {
//     useClass: LocalStorage,
//   });
//   container.register('API_ROUTE_ROOT', {
//     useValue: COINGECKO_API_ROUTES.root,
//   });
// }

const injector = createInjector()
  .provideValue('API_ROUTE_ROOT', COINGECKO_API_ROUTES.root)
  .provideClass('AuthRepository', FirebaseRepository, Scope.Singleton)
  .provideClass('StorageRepository', LocalStorage, Scope.Singleton);

export default injector;
