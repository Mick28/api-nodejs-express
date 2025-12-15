import "dotenv/config";
import { createApp } from "../src/app.js";

// Entry point para Vercel Serverless Functions
const app = createApp();

export default app;
