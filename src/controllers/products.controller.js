import * as productsService from '../services/products.service.js';

export async function getAll(req, res, next) {
  try {
    const products = await productsService.getAll();
    res.json(products);
  } catch (err) { next(err); }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(product);
  } catch (err) { next(err); }
}

export async function create(req, res, next) {
  try {
    const created = await productsService.create(req.body);
    res.status(201).json(created);
  } catch (err) { next(err); }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const updated = await productsService.update(id, req.body);
    if (!updated) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(updated);
  } catch (err) { next(err); }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const removed = await productsService.remove(id);
    if (!removed) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado', id });
  } catch (err) { next(err); }
}
