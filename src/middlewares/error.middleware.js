import { HttpError } from '../utils/http-error.js';

export function notFoundHandler(req, res, next) {
  res.status(404).json({ message: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(err, req, res, next) {
  console.error('[ERROR]', err);
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message, details: err.details || null });
  }
  res.status(500).json({ message: 'Error interno del servidor' });
}
