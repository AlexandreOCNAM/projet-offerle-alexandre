import { User } from "../models/user";


export interface HttpLoginResponse {
  user: User;
  backendTokens: backendTokens;
}

export interface backendTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}