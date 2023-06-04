import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginApiResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  sub: string;
  email: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  name: string;
  surname: string;
  username: string;
}

export interface UserRegisterCredentialsForm extends UserRegisterCredentials {
  repeat: string;
}

export interface UserVerifyEmailStructure {
  confirmationCode: string | string[];
}

export interface UserIsVerifiedEmailStructure {
  email: string;
}

export interface isUserVerifiedResponse {
  isVerified: boolean;
}

export interface ResponseApiErrorStructure {
  error: number;
}
