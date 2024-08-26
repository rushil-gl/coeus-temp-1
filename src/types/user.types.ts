export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}
