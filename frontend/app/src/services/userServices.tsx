import axios from "axios";
import { api } from "./api";

const API_URL = `${api.defaults.baseURL}/cadastros/usuario`;

// Try to check in database if user exists/not by email
export async function checkUserByEmail(email: string) {
  try {
    // como seu backend ainda não tem busca por e-mail,
    // por enquanto vamos pegar todos e filtrar aqui no front
    const response = await axios.get(API_URL);
    const users = response.data.content || []; // pois o back retorna um Page<SystemUserDTO>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = users.find((u: any) => u.email === email);
    return !!user; // true se achou
  } catch (error) {
    console.error("Erro ao verificar usuário:", error);
    throw new Error("Erro ao conectar com o servidor");
  }
}