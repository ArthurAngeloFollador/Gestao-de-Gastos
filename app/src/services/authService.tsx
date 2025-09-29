import { api } from "./api";

export async function loginAdmin(email: string, password: string) {
  return await api.post("/admin/login", { email, password });
}

export async function loginUser(email: string, password: string) {
  return await api.post("/user/login", { email, password });
}

export async function signupUser(
  name: string,
  email: string,
  password: string
) {
  return await api.post("/user/signup", { name, email, password });
}
