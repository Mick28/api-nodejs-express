// API Base URL
const API_URL = "https://fakestoreapi.com";

// Capturar argumentos de la terminal
const [, , method, resource, ...params] = process.argv;

// Función principal para manejar los comandos
async function handleCommand() {
  try {
    // Validar que se proporcionen los argumentos mínimos
    if (!method || !resource) {
      console.error("Error: Debes proporcionar un método y un recurso");
      console.log("\nUso:");
      console.log("  npm run start GET products");
      console.log("  npm run start GET products/<id>");
      console.log("  npm run start POST products <title> <price> <category>");
      console.log("  npm run start DELETE products/<id>");
      return;
    }

    // Extraer información del recurso
    const [resourceType, resourceId] = resource.split("/");

    // Validar que el recurso sea 'products'
    if (resourceType !== "products") {
      console.error('Error: El recurso debe ser "products"');
      return;
    }

    // Ejecutar la acción según el método HTTP
    switch (method.toUpperCase()) {
      case "GET":
        await getProducts(resourceId);
        break;

      case "POST":
        await createProduct(params);
        break;

      case "DELETE":
        await deleteProduct(resourceId);
        break;

      default:
        console.error(`Error: Método "${method}" no soportado`);
        console.log("Métodos disponibles: GET, POST, DELETE");
    }
  } catch (error) {
    console.error("Error inesperado:", error.message);
  }
}

// Función para obtener productos
async function getProducts(productId) {
  try {
    const url = productId
      ? `${API_URL}/products/${productId}`
      : `${API_URL}/products`;

    console.log(`Consultando: ${url}\n`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (productId) {
      // Mostrar un producto específico
      console.log("Producto encontrado:\n");
      displayProduct(data);
    } else {
      // Mostrar todos los productos
      console.log(`Total de productos: ${data.length}\n`);
      data.forEach((product, index) => {
        console.log(`--- Producto ${index + 1} ---`);
        displayProduct(product);
        console.log("");
      });
    }
  } catch (error) {
    console.error("Error al obtener productos:", error.message);
  }
}

// Función para crear un producto
async function createProduct(params) {
  try {
    const [title, price, category, ...descriptionParts] = params;

    // Validar parámetros
    if (!title || !price || !category) {
      console.error("Error: Debes proporcionar título, precio y categoría");
      console.log(
        "Uso: npm run start POST products <title> <price> <category>"
      );
      return;
    }

    // Preparar el nuevo producto
    const newProduct = {
      title,
      price: parseFloat(price),
      category,
      description: descriptionParts.join(" ") || `Descripción de ${title}`,
      image: "https://fakestoreapi.com/img/placeholder.jpg",
    };

    console.log("Creando producto...\n");

    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    console.log("Producto creado exitosamente:\n");
    displayProduct(data);
  } catch (error) {
    console.error("Error al crear producto:", error.message);
  }
}

// Función para eliminar un producto
async function deleteProduct(productId) {
  try {
    if (!productId) {
      console.error("Error: Debes proporcionar un ID de producto");
      console.log("Uso: npm run start DELETE products/<id>");
      return;
    }

    console.log(`Eliminando producto ID: ${productId}...\n`);

    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    console.log("Producto eliminado exitosamente:");
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error al eliminar producto:", error.message);
  }
}

// Función auxiliar para mostrar un producto formateado
function displayProduct(product) {
  const { id, title, price, category, description, image } = product;

  console.log(`ID: ${id}`);
  console.log(`Título: ${title}`);
  console.log(`Precio: $${price}`);
  console.log(`Categoría: ${category}`);
  console.log(
    `Descripción: ${description?.substring(0, 100)}${
      description?.length > 100 ? "..." : ""
    }`
  );
  console.log(`Imagen: ${image}`);
}

// Ejecutar el comando
handleCommand();
