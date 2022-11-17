export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export class ApiResponseValues implements ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  constructor({success, message, data}: ApiResponse) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
