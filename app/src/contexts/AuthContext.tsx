import { createContext } from "react";
import { typeUserEnum } from "../constants/enums/typeUserEnum";

export interface User {
  role: keyof typeof typeUserEnum; // Updated type for `role`
  isLogged: boolean;
  name: string;
}

interface LoginSuccess {
  ok: true;
  status: number;
}

interface LoginError {
  ok: false;
  error: string;
  code: string;
  status: number;
}

interface SignUpSuccess {
  ok: true;
  status: number;
}

interface SignUpError {
  ok: false;
  error: string;
  code: string;
  status: number;
}

export type LoginResponse = LoginSuccess | LoginError;
export type SignUpResponse = SignUpSuccess | SignUpError;

export interface AuthContextType {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
  onLoadUser: () => void;
  adminLogin: (email: string, password: string, name?: string) => Promise<LoginResponse>;
  userLogin: (email: string, password: string, name?: string) => Promise<LoginResponse>;
  signupUser: (name: string, email: string, password: string) => Promise<SignUpResponse>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
