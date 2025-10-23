import type { LoginResponse, SignUpResponse } from "../contexts/AuthContext";
import { api } from "./api";

export async function loginAdmin(email: string, passwordHash: string) {
  return await api.post("/admin/login", { email, passwordHash });
}

// Login user

// TODO add password
export async function loginUser(
  email: string,
): Promise<LoginResponse> {
  return await api.get("http://localhost:8080/login", {
    params: { email }, // Pass the email and password as a query parameter
  });
}

// Sign up user
export async function signupUser(
  name: string,
  email: string,
  passwordHash: string
): Promise<SignUpResponse> {
  return await api.post("http://localhost:8080/cadastros/usuario", {
    name,
    email,
    passwordHash,
  });
}
