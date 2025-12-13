# 🧩 Products API · Node + Express + Firestore + JWT

🛠 **Proyecto Final NodeJS**.

API REST para administrar productos (CRUD) con autenticación por JWT y acceso a datos en Firebase Firestore.
Arquitectura en capas: **routes → controllers → services → models** + middlewares y provider de Firebase.

## 📦 Requerimientos cumplidos

- Configuración inicial (ESModules, `npm init -y`, script `start`).
- Dependencias: `express`, `cors`, `body-parser`, `dotenv`, `firebase`, `jsonwebtoken`.
- Servidor Express con CORS, `body-parser.json()`, 404 y manejo centralizado de errores.
- Rutas:
  - `GET /api/products` – listar productos (público)
  - `GET /api/products/:id` – obtener producto (público)
  - `POST /api/products/create` – crear (protegido)
  - `PUT /api/products/:id` – actualizar (protegido)
  - `DELETE /api/products/:id` – eliminar (protegido)
  - `POST /auth/login` – login y retorno de **Bearer Token**
- Controladores y servicios separados.
- Modelos conectados a **Firestore**.
- Middleware `authMiddleware` con **JWT** para proteger rutas.
- Manejo de errores con 400/401/403/404/500.

## 🚀 Puesta en marcha

```bash
npm install
cp .env.example .env
# Completa .env con las credenciales de app Web Firebase y JWT_SECRET
npm run dev
```

### Login de demostración

- Usuario y contraseña en `.env`: `ADMIN_USER` / `ADMIN_PASS` (por defecto admin/admin)
- Petición:

  ```http
  POST /auth/login
  Content-Type: application/json

  { "username": "admin", "password": "admin" }
  ```

  Respuesta:

  ```json
  { "token": "eyJhbGciOiJI...", "token_type": "Bearer" }
  ```

### Usar el token

Incluye el header `Authorization: Bearer <token>` en las rutas protegidas.

## 🗂 Estructura

```
src/
  controllers/
  middlewares/
  models/
  providers/
  routes/
  services/
  utils/
  index.js
```

## 🗄 Firestore

- Proyecto para Firebase y una **app Web** para obtener credenciales.
- En Firestore, se creó la colección `products` y un primer documento (por ejemplo con `title`, `price`, `category`).
- **Nota**: se usa el SDK Web (`firebase`) por requisito del enunciado. Para entornos productivos de servidor se recomienda `firebase-admin`.

## 🔐 Seguridad y errores

- 401 si falta token, 403 si token inválido/expirado.
- 404 para rutas inexistentes.
- 400 para validaciones de entrada.
- 500 ante errores no controlados.

## 🧪 Ejemplos con cURL

```bash
# Login
curl -s -X POST http://localhost:3000/auth/login -H "Content-Type: application/json"       -d '{"username":"admin","password":"admin"}'

# Listar productos (público)
curl -s http://localhost:3000/api/products

# Crear (protegido)
TOKEN="..."
curl -s -X POST http://localhost:3000/api/products/create -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json"       -d '{"title":"Remera Azul","price":1999.99,"category":"indumentaria","description":"100% algodón"}'
```

---

## 🤝 Contribuciones

¿Tienes ideas para mejorar este proyecto? ¡Las contribuciones son bienvenidas!

## 📄 Licencia

MIT

## 👨‍💻 Autor

Desarrollado por Miguel A. Escurra como proyecto educativo de Talento-Tech para aprender gestión de API REST, administrar productos (CRUD) con autenticación por JWT y acceso a datos en Firebase Firestore.

---

⭐ Si te ha sido útil este proyecto, no olvides darle una estrella

**¡Feliz Coding!** 🚀
