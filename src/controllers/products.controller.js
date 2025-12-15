import * as service from "../services/products.service.js";

export async function getAllProducts(req, res, next) {
  try {
    const products = await service.listProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

export async function getProductById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await service.getProduct(id);
    res.json(product);
  } catch (err) {
    next(err);
  }
}

export async function createProduct(req, res, next) {
  try {
    const product = await service.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

export async function updateProduct(req, res, next) {
  try {
    const { id } = req.params;
    const updated = await service.updateProduct(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    await service.deleteProduct(id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    next(err);
  }
}
