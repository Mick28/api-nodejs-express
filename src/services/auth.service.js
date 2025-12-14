import jwt from "jsonwebtoken";
import { HttpError } from "../utils/http-error.js";

const { ADMIN_USER, ADMIN_PASS, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

export async function login(username, password) {
  if (!username || !password) {
    throw new HttpError(400, "Credenciales incompletas");
  }
  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    throw new HttpError(401, "Usuario o contraseña inválidos");
  }
  const payload = { sub: username, role: "admin" };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN || "2h",
  });
  return token;
}
