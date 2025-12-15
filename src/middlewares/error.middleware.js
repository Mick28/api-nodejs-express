// Manejo centralizado de errores
export function errorMiddleware(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(err);

  const status = Number(err?.status || err?.statusCode) || 500;
  const message = err?.message || "Internal Server Error";

  if (res.headersSent) return next(err);
  res.status(status).json({ error: message });
}
