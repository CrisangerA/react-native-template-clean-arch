import {ApiResponse} from '../model';

export default interface HttpRepository {
  Get: (route: string) => Promise<ApiResponse>;
  Post: (route: string, body?: RequestInit) => Promise<ApiResponse>;
  Put: (route: string, body?: RequestInit) => Promise<ApiResponse>;
  Delete: (route: string) => Promise<ApiResponse>;
}
