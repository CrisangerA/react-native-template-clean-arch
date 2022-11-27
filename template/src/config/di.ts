import {createInjector, Scope} from 'typed-inject';
import FirebaseRepository from '@modules/authentication/infrastructure/firebase.repository';
import LocalStorage from '@modules/shared/infrastructure/localStorage';
import {COINGECKO_API_ROUTES} from './api.routes';

const injector = createInjector()
  .provideValue('API_ROUTE_ROOT', COINGECKO_API_ROUTES.root)
  .provideClass('AuthRepository', FirebaseRepository, Scope.Singleton)
  .provideClass('StorageRepository', LocalStorage, Scope.Singleton);

export default injector;
