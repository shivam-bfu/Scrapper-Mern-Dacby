import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import scrapeRoutes from "./routes/scrapeRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/stories", storyRoutes);

app.use("/api/scrape", scrapeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "API Running Successfully",
  });
});

export default app;