import { jwtDecode } from "jwt-decode";
import { useState, type ReactNode } from "react";
import { AuthContext, type User, type LoginResponse } from "./AuthContext";
import { AxiosError } from "axios";
import { loginAdmin, loginUser } from "../services/authService";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);

  interface DecodedToken extends User {
    exp: number;
  }

  const login = (userData: User) => setUser(userData);
  const onLoadUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);

      if (!isTokenValid(decoded)) {
        logout();
      } else {
        setUser(decoded as User); // type assertion
      }
    }
  };

  function isTokenValid(decoded: DecodedToken) {
    return decoded.exp * 1000 > new Date().getTime();
  }

  const adminLogin = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await loginAdmin(email, password);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        return { ok: true, status: response.status };
      }
      return {
        ok: false,
        error: "Unknown status",
        code: "UNKNOWN",
        status: response.status,
      };
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return {
          ok: false,
          error: error.response.data.error,
          code: error.response.data.code,
          status: error.response.data.status,
        };
      } else {
        return {
          ok: false,
          error: "An unknown error occurred",
          code: "UNKNOWN",
          status: 500,
        };
      }
    }
  };

  const userLogin = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await loginUser(email, password);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        return { ok: true, status: response.status };
      }
      return {
        ok: false,
        error: "Unknown status",
        code: "UNKNOWN",
        status: response.status,
      };
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return {
          ok: false,
          error: error.response.data.error,
          code: error.response.data.code,
          status: error.response.data.status,
        };
      } else {
        return {
          ok: false,
          error: "An unknown error occurred",
          code: "UNKNOWN",
          status: 500,
        };
      }
    }
  };

  function logout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        adminLogin,
        userLogin,
        login,
        logout,
        onLoadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
