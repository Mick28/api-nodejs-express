/* import "dotenv/config";
   import { createApp } from "./src/app.js";

const app = createApp();

// En Vercel (Serverless), NO se debe llamar app.listen.
// Para correr local, sí.
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}

export default app; */


import "dotenv/config";
import { createApp } from "../src/app.js";

// Entry point para Vercel Serverless Functions
const app = createApp();

export default app;

