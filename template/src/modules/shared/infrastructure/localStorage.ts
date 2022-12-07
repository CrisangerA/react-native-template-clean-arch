import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageRepository from '../domain/repository/storage.repository';

export default class LocalStorage implements StorageRepository {
  async StoreLocalData(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  }
  async GetStoredLocalData(key: string) {
    return AsyncStorage.getItem(key);
  }
}
