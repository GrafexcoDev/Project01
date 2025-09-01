// server/src/index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import projectsRouter from "./routes/projects.js";
import testimonialsRouter from "./routes/testimonials.js";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(express.json());

// CORS (allow your client)
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: clientOrigin,
    credentials: false,
  })
);

// MongoDB (Atlas or local)
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// API routes
app.use("/api/projects", projectsRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/contact", contactRouter);

// Simple health probe
app.get("/api/health", (_req, res) =>
  res.json({ ok: true, mongo: mongoose.connection.readyState })
);

// Serve client in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, "../../client/dist");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientDist));
  app.get("*", (_req, res) => res.sendFile(path.join(clientDist, "index.html")));
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
