//import {injectable} from 'tsyringe';
import HttpRepository from '../domain/repository/http.repository';
import {ApiResponse, ApiResponseValues} from '../domain/model';

//@injectable()
export default class Http implements HttpRepository {
  // constructor(
  //   //@inject('API_ROUTE_ROOT') private readonly API_ROUTE_ROOT: string,
  //   private readonly API_ROUTE_ROOT: string,
  // ) {}
  // public static inject = ['API_ROUTE_ROOT'] as const;
  //private getRoute = (route: string) => `${this.API_ROUTE_ROOT}${route}`;
  private getRoute = (route: string) => `${route}`;
  private headers = () => {
    return {
      'content-type': 'application/json',
      Accept: 'application/json',
    };
  };
  private successCallback =
    (resolve: any, reject: any) => async (response: Response) => {
      console.log(response.status);
      const data = await response.json();
      if (response.ok) {
        resolve(
          new ApiResponseValues({
            data,
            success: data.success || true,
            ...(data.message && {message: data.message}),
          }),
        );
      }
      if (response.status === 400) {
        reject(
          new ApiResponseValues({
            success: false,
            message: 'Bad request',
            ...(data && data),
          }),
        );
      } else if (response.status === 401) {
        reject(
          new ApiResponseValues({
            success: false,
            message: 'Unauthorized',
            ...(data && data),
          }),
        );
      } else if (response.status === 403) {
        reject(
          new ApiResponseValues({
            success: false,
            message: 'Forbidden',
            ...(data && data),
          }),
        );
      } else if (response.status === 404) {
        reject(
          new ApiResponseValues({
            success: false,
            message: 'Not Found',
            ...(data && data),
          }),
        );
      } else if (response.status === 500) {
        reject(
          new ApiResponseValues({
            success: false,
            message: 'Internal server error',
            ...(data && data),
          }),
        );
      }
      reject(
        new ApiResponseValues({
          success: false,
          message: 'Fetch Error',
          ...(data && data),
        }),
      );
    };

  Get(route: string) {
    return new Promise<ApiResponse>((resolve, reject) =>
      fetch(this.getRoute(route), {
        headers: this.headers(),
      }).then(this.successCallback(resolve, reject), reject),
    );
  }
  Post(route: string, body: any) {
    return new Promise<ApiResponse>((resolve, reject) =>
      fetch(this.getRoute(route), {
        method: 'POST',
        headers: this.headers(),
        body: JSON.stringify(body),
      }).then(this.successCallback(resolve, reject), reject),
    );
  }
  Put(route: string, body: any) {
    return new Promise<ApiResponse>((resolve, reject) =>
      fetch(this.getRoute(route), {
        method: 'PUT',
        headers: this.headers(),
        body: JSON.stringify(body),
      }).then(this.successCallback(resolve, reject), reject),
    );
  }
  Delete(route: string) {
    return new Promise<ApiResponse>((resolve, reject) =>
      fetch(this.getRoute(route), {
        method: 'DELETE',
        headers: this.headers(),
      }).then(this.successCallback(resolve, reject), reject),
    );
  }
}
