import * as Product from '../models/product.model.js';
import { HttpError } from '../utils/http-error.js';

const requiredFields = ['title', 'price', 'category'];

export async function getAll() {
  return Product.getAll();
}

export async function getById(id) {
  return Product.getById(id);
}

export async function create(data) {
  // Validación mínima
  for (const f of requiredFields) {
    if (data[f] === undefined || data[f] === null || data[f] === '') {
      throw new HttpError(400, `Campo requerido faltante: ${f}`);
    }
  }
  return Product.create(data);
}

export async function update(id, data) {
  if (!id) throw new HttpError(400, 'ID requerido');
  return Product.update(id, data);
}

export async function remove(id) {
  if (!id) throw new HttpError(400, 'ID requerido');
  return Product.remove(id);
}
