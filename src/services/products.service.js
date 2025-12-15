import * as model from "../models/Product.js";

function httpError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

export async function listProducts() {
  return await model.getAllProducts();
}

export async function getProduct(id) {
  const product = await model.getProductById(id);
  if (!product) throw httpError(404, "Not Found");
  return product;
}

export async function createProduct(data) {
  const { name, price, categories } = data || {};

  if (typeof name !== "string" || !name.trim()) {
    throw httpError(400, "name is required");
  }

  // price es opcional, pero si llega, validamos que sea número
  if (price !== undefined && (Number.isNaN(Number(price)) || price === "")) {
    throw httpError(400, "price must be a number");
  }

  const payload = {
    name: name.trim(),
    price: price !== undefined ? Number(price) : undefined,
    categories: categories ?? null,
  };

  // Firestore: es mejor no guardar undefined
  if (payload.price === undefined) delete payload.price;

  return await model.createProduct(payload);
}

export async function updateProduct(id, data) {
  const { name, price, categories } = data || {};

  const update = {};
  if (name !== undefined) {
    if (typeof name !== "string" || !name.trim()) {
      throw httpError(400, "name must be a non-empty string");
    }
    update.name = name.trim();
  }
  if (price !== undefined) {
    if (Number.isNaN(Number(price)) || price === "") {
      throw httpError(400, "price must be a number");
    }
    update.price = Number(price);
  }
  if (categories !== undefined) update.categories = categories;

  const updated = await model.updateProduct(id, update);
  if (!updated) throw httpError(404, "Not Found");
  return updated;
}

export async function deleteProduct(id) {
  const deleted = await model.deleteProduct(id);
  if (!deleted) throw httpError(404, "Not Found");
  return true;
}
