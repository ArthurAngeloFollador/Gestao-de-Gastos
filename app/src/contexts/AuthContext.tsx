import { createContext } from "react";
import { typeUserEnum } from "../constants/enums/typeUserEnum"; // Import the enum

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

export type LoginResponse = LoginSuccess | LoginError;

export interface AuthContextType {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
  onLoadUser: () => void;
  adminLogin: (email: string, password: string) => Promise<LoginResponse>;
  userLogin: (email: string, password: string) => Promise<LoginResponse>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
