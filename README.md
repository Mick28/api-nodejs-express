# API REST – Node.js + Express + Firebase (Firestore) + JWT

API REST desarrollada en **Node.js + Express**, con **Firestore (Firebase)** como base de datos en la nube, **autenticación JWT para usuario administrador**, arquitectura por capas y **deploy en Vercel**.

---

## 🎯 Objetivo del proyecto

Brindar una API REST segura para la **gestión de productos** (CRUD completo), permitiendo:

- Acceso **público** a la lectura de productos
- Acceso **protegido** (JWT) para creación, actualización y eliminación
- Autenticación de un **usuario administrador**
- Persistencia de datos en **Firestore**
- Arquitectura escalable y mantenible
- Manejo correcto de errores HTTP

---

## 🧱 Tecnologías utilizadas

- Node.js
- Express.js
- Firebase / Firestore
- jsonwebtoken (JWT)
- dotenv
- Vercel (Serverless Functions)

---

## 📁 Estructura del proyecto

```
api-nodejs-express/
│
├── api/
│   └── index.js              # Entry point para Vercel
│
├── src/
│   ├── config/
│   │   └── firebase.js       # Configuración Firebase / Firestore
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js    # Validación JWT
│   │   └── error.middleware.js   # Manejo de errores
│   │
│   ├── models/
│   │   └── product.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   └── products.service.js
│   │
│   └── app.js                # Configuración Express
│
├── index.js                  # Ejecución local
├── vercel.json               # Configuración Vercel
├── package.json
├── .env.example
└── README.md
```

---

## 🔐 Autenticación

La API implementa **JWT (JSON Web Token)** para proteger las rutas sensibles.

### Usuario administrador

Las credenciales se definen por variables de entorno:

```
ADMIN_USER=admin
ADMIN_PASS=admin
```

---

## 🌐 Endpoints disponibles

### 🔑 Autenticación

#### Login

```
POST /auth/login
```

**Body:**

```json
{
  "username": "admin",
  "password": "admin"
}
```

**Respuesta:**

```json
{
  "token": "<jwt>",
  "token_type": "Bearer"
}
```

---

### 📦 Productos

#### Obtener todos los productos (público)

```
GET /api/products
```

#### Obtener producto por ID (público)

```
GET /api/products/:id
```

#### Crear producto (protegido)

```
POST /api/products/create
```

**Headers:**

```
Authorization: Bearer <token>
```

**Body:**

```json
{
  "name": "Producto X",
  "price": 1200,
  "categories": ["tech", "hogar"]
}
```

#### Actualizar producto (protegido)

```
PUT /api/products/:id
```

#### Eliminar producto (protegido)

```
DELETE /api/products/:id
```

---

## ⚠️ Manejo de errores

La API responde correctamente ante:

- **400** – Datos inválidos
- **401** – Token no enviado
- **403** – Token inválido o expirado
- **404** – Ruta no encontrada
- **500** – Error interno

---

## 🔧 Variables de entorno

Crear un archivo `.env` basado en `.env.example`:

```
PORT=3000
JWT_SECRET=super_secret_key
JWT_EXPIRES_IN=1h

ADMIN_USER=admin
ADMIN_PASS=admin

FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

---

## ▶️ Ejecución local

```bash
npm install
npm run dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

## ☁️ Deploy en Vercel

1. Subir el repositorio a GitHub
2. Crear un nuevo proyecto en Vercel
3. Configurar todas las variables de entorno
4. Deploy automático

La API quedará accesible en:

```
https://tu-proyecto.vercel.app
```

---

## 🧪 Pruebas con Postman / Thunder Client

1. Ejecutar `POST /auth/login`
2. Copiar el token JWT
3. Enviar el token en el header:

```
Authorization: Bearer <token>
```

4. Probar endpoints protegidos

---

## ✅ Estado del proyecto

✔ Arquitectura por capas
✔ Autenticación JWT
✔ Firestore
✔ CRUD completo
✔ Manejo de errores
✔ Listo para producción

---

## 👨‍💻 Autor

Desarrollado por Miguel Angel Escurra como proyecto educativo de Talento-Tech con el profesor Jean Paul Ferreira para aprender gestión de API REST, administrar productos (CRUD) con autenticación por JWT y acceso a datos mediante Firebase Firestore.

---

**Proyecto académico – API REST con Node.js y Firebase**
