import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { notFoundHandler, errorHandler } from './middlewares/error.middleware.js';
import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productsRouter);
app.use('/auth', authRouter);

// Ruta base
app.get('/', (req, res) => {
  res.json({ ok: true, service: 'Products API', version: '1.0.0' });
});

// 404
app.use(notFoundHandler);

// Manejo centralizado de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[OK] Server listening on http://localhost:${PORT}`);
});
