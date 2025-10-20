import type { SignUpResponse } from "../contexts/AuthContext";
import { api } from "./api";

export async function loginAdmin(email: string, passwordHash: string) {
  return await api.post("/admin/login", { email, passwordHash });
}

export async function loginUser(email: string, passwordHash: string) {
  return await api.post("/user/login", { email, passwordHash });
}

export async function signupUser(
  name: string,
  email: string,
  passwordHash: string
): Promise<SignUpResponse> {
  return await api.post("http://localhost:8080/cadastros/usuario", { name, email, passwordHash });
}
