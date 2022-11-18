import AsyncStorage from '@react-native-async-storage/async-storage';
//import {singleton} from 'tsyringe';
import StorageRepository from '../domain/repository/storage.repository';

//@singleton()
export default class LocalStorage implements StorageRepository {
  async StoreLocalData(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  }
  async GetStoredLocalData(key: string) {
    return AsyncStorage.getItem(key);
  }
}
