import { login } from "@/app/api/authApi";

export async function loginUser({ username, password }) {
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  const result = await login({ username, password });
  return result;
}
