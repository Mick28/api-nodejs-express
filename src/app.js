import express from "express";
import cors from "cors";

import productsRouter from "./routes/products.router.js";
import authRouter from "./routes/auth.router.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

export function createApp() {
  const app = express();

  // Middlewares base
  app.use(cors());
  app.use(express.json());

  // Health
  app.get("/", (req, res) => {
    res.json({ status: "ok" });
  });

  // Routes
  app.use("/auth", authRouter);
  app.use("/api", productsRouter);

  // 404 + errors
  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  return app;
}
