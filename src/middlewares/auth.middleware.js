import jwt from "jsonwebtoken";

/**
 * Protege rutas via Authorization: Bearer <token>
 * - 401 si no hay token
 * - 403 si token inválido/expirado
 */
export function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({ error: "Missing Bearer token" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      // Configuración faltante
      return res.status(500).json({ error: "JWT_SECRET is not configured" });
    }

    const payload = jwt.verify(token, secret);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}
