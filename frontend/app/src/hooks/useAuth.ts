import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "../services/api";

interface User {
  id: string;
  name?: string;
  email: string;
  passwordHash: string;
}

// TODO: Add a token for authentication
interface AuthState {
  user: User | null;
  // token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, passwordHash: string) => Promise<void>;
  signup: (name: string, email: string, passwordHash: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
  createAccount: (
    accountName: string,
    bankName: string,
    currentBalance: number,
    userCod: number
  ) => Promise<void>;
  createTransaction: (
    name: string,
    amount: number,
    description: string,
    transactionDate: string,
    userCod: number
  ) => Promise<void>;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      // token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      // Login
      login: async (email: string, passwordHash: string) => {
        set({ isLoading: true, error: null });
        try {
          const payload = {
            email,
            passwordHash,
          };
          const response = await api.post("/login", payload);

          const data = response.data;

          // Error handling
          if (!data) {
            set({
              error: response.data.message,
            });
          } else {
            // Success
            set({
              user: {
                id: data.userId,
                name: data.name ?? "User",
                email: data.email,
                passwordHash: data.passwordHash,
              },
              isAuthenticated: true,
            });
          }
        } finally {
          set({ isLoading: false });
        }
      },

      // Signup
      signup: async (name: string, email: string, passwordHash: string) => {
        set({ isLoading: true, error: null });
        try {
          const payload = {
            name,
            email,
            passwordHash,
          };
          const response = await api.post("/signup", payload);
          const data = response.data;

          // Error handling
          if (!data) {
            set({
              error: response.data.message,
            });
          } else {
            // Success
            set({
              user: {
                id: data.userId,
                name: data.name ?? "User",
                email: data.email,
                passwordHash: data.passwordHash,
              },
              isAuthenticated: true,
            });
          }
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },
      setUser: (user: User | null) => {
        set({ user });
      },

      createAccount: async (
        accountName: string,
        bankName: string,
        currentBalance: number,
        userCod
      ) => {
        const payload = {
          accountName,
          bankName,
          currentBalance,
          userCod,
        };
        await api.post("/register/account", payload);
      },

      createTransaction: async (
        name: string,
        amount: number,
        description: string,
        transactionDate: string,
        userCod: number
      ) => {
        const payload = {
          name,
          amount,
          description,
          transactionDate,
          userCod,
        };
        await api.post("/movement/transaction", payload);
      },
    }),
    {
      name: "useAuth",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
