export default interface StorageRepository {
  StoreLocalData(key: string, value: string): Promise<void>;
  GetStoredLocalData(key: string): Promise<string | null>;
}
