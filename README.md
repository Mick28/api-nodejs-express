# 🛍️ Product Manager CLI

Una herramienta de línea de comandos poderosa y fácil de usar para gestionar productos de una tienda en línea utilizando la API de FakeStore.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ES Modules](https://img.shields.io/badge/ES_Modules-Enabled-blue?style=for-the-badge)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Ejemplos](#-ejemplos)
- [API Reference](#-api-reference)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías)

## ✨ Características

- 🔍 **Consultar todos los productos** disponibles en la tienda
- 🎯 **Buscar productos específicos** por ID
- ➕ **Crear nuevos productos** con información personalizada
- 🗑️ **Eliminar productos** existentes
- 🎨 **Interface visual atractiva** con emojis y formato claro
- ⚡ **Rápido y eficiente** usando peticiones asíncronas
- ✅ **Validación de errores** con mensajes claros
- 📦 **Sin dependencias externas** (solo Node.js nativo)

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 14 o superior
- **npm** (incluido con Node.js)

Para verificar tu versión de Node.js:

```bash
node --version
```

## 📥 Instalación

### Paso 1: Clonar o Crear el Proyecto

```bash
# Crear directorio del proyecto
mkdir product-manager
cd product-manager
```

### Paso 2: Inicializar npm

```bash
npm init -y
```

### Paso 3: Configurar package.json

Asegúrate de que tu `package.json` incluya:

```json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
```

### Paso 4: Crear el archivo index.js

Copia el código proporcionado en el archivo `index.js` en la raíz del proyecto.

## 🚀 Uso

La sintaxis general del comando es:

```bash
npm run start <MÉTODO> <RECURSO> [PARÁMETROS]
```

### Comandos Disponibles

| Comando                                       | Descripción                    |
| --------------------------------------------- | ------------------------------ |
| `GET products`                                | Obtener todos los productos    |
| `GET products/<id>`                           | Obtener un producto específico |
| `POST products <título> <precio> <categoría>` | Crear un nuevo producto        |
| `DELETE products/<id>`                        | Eliminar un producto           |

## 💡 Ejemplos

### 📋 Listar Todos los Productos

```bash
npm run start GET products
```

**Salida esperada:**

```
🔍 Consultando: https://fakestoreapi.com/products

📦 Total de productos: 20

--- Producto 1 ---
ID: 1
Título: Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
Precio: $109.95
Categoría: men's clothing
...
```

### 🔎 Consultar un Producto Específico

```bash
npm run start GET products/15
```

**Salida esperada:**

```
🔍 Consultando: https://fakestoreapi.com/products/15

📦 Producto encontrado:

ID: 15
Título: BIYLACLESEN Women's 3-in-1 Snowboard Jacket...
Precio: $56.99
Categoría: women's clothing
...
```

### ➕ Crear un Nuevo Producto

```bash
npm run start POST products "Camiseta Vintage" 29.99 "remeras"
```

**Salida esperada:**

```
📝 Creando producto...

✅ Producto creado exitosamente:

ID: 21
Título: Camiseta Vintage
Precio: $29.99
Categoría: remeras
...
```

### 🗑️ Eliminar un Producto

```bash
npm run start DELETE products/7
```

**Salida esperada:**

```
🗑️  Eliminando producto ID: 7...

✅ Producto eliminado exitosamente:
{
  "id": 7,
  "title": "White Gold Plated Princess...",
  ...
}
```

## 📚 API Reference

Esta herramienta utiliza la [FakeStore API](https://fakestoreapi.com/), una API REST gratuita para pruebas y prototipos.

### Endpoints Utilizados

| Método | Endpoint        | Descripción                    |
| ------ | --------------- | ------------------------------ |
| GET    | `/products`     | Obtiene todos los productos    |
| GET    | `/products/:id` | Obtiene un producto específico |
| POST   | `/products`     | Crea un nuevo producto         |
| DELETE | `/products/:id` | Elimina un producto            |

## 📁 Estructura del Proyecto

```
product-manager/
│
├── index.js          # Archivo principal con toda la lógica
├── package.json      # Configuración del proyecto y scripts
└── README.md         # Documentación del proyecto
```

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **ES Modules** - Sistema de módulos modernos
- **Fetch API** - Para peticiones HTTP
- **FakeStore API** - API externa para gestión de productos
- **Process.argv** - Para captura de argumentos CLI

## 🎯 Características Técnicas Implementadas

### Conceptos de JavaScript Aplicados

- ✅ **Async/Await** - Para manejo de promesas
- ✅ **Destructuring** - Extracción de datos de arrays y objetos
- ✅ **Spread Operator** - Para parámetros variables
- ✅ **Template Literals** - Para strings dinámicos
- ✅ **Arrow Functions** - Sintaxis moderna de funciones
- ✅ **Try/Catch** - Manejo robusto de errores
- ✅ **Array Methods** - forEach, split, join
- ✅ **HTTP Methods** - GET, POST, DELETE

## 🐛 Manejo de Errores

La aplicación incluye validación completa de errores:

- ❌ Argumentos faltantes o incorrectos
- ❌ Métodos HTTP no soportados
- ❌ Recursos inválidos
- ❌ Errores de red o API
- ❌ IDs de productos no encontrados

## 📝 Notas Importantes

⚠️ **Nota sobre la API**: FakeStore API es una API de prueba. Las operaciones POST, PUT y DELETE simulan las acciones pero no modifican realmente la base de datos.

## 🤝 Contribuciones

¿Tienes ideas para mejorar este proyecto? ¡Las contribuciones son bienvenidas!

## 📄 Licencia

MIT

## 👨‍💻 Autor

Desarrollado por Miguel A. Escurra como proyecto educativo de Talento-Tech para aprender gestión de APIs y desarrollo CLI con Node.js.

---

⭐ Si te ha sido útil este proyecto, no olvides darle una estrella

**¡Feliz Coding!** 🚀
