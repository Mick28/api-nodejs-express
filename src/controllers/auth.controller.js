import { loginService } from "../services/auth.service.js";

export async function login(req, res, next) {
  try {
    const { username, password } = req.body || {};
    const result = await loginService({ username, password });
    res.json(result);
  } catch (err) {
    next(err);
  }
}
