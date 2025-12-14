import { Router } from 'express';
import * as productsController from '../controllers/products.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// Públicas
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

// Protegidas
router.post('/create', authMiddleware, productsController.create);
router.put('/:id', authMiddleware, productsController.update);
router.delete('/:id', authMiddleware, productsController.remove);

export default router;
