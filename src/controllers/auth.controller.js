import * as authService from '../services/auth.service.js';

export async function login(req, res, next) {
  try {
    const { username, password } = req.body || {};
    const token = await authService.login(username, password);
    res.json({ token, token_type: 'Bearer' });
  } catch (err) {
    // err.status 401/400
    next(err);
  }
}
