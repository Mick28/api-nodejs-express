import jwt from "jsonwebtoken";

function httpError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

export async function loginService({ username, password }) {
  if (!username || !password) {
    throw httpError(400, "username and password are required");
  }

  const adminUser = process.env.ADMIN_USER || "admin";
  const adminPass = process.env.ADMIN_PASS || "admin";
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

  if (!secret) {
    throw httpError(500, "JWT_SECRET is not configured");
  }

  if (username !== adminUser || password !== adminPass) {
    throw httpError(401, "Invalid credentials");
  }

  const token = jwt.sign(
    { sub: "admin", username: adminUser, role: "admin" },
    secret,
    { expiresIn }
  );

  return { token, token_type: "Bearer" };
}
