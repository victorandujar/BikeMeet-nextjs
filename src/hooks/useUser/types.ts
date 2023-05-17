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
