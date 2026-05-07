import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";

import connectDB from "./config/db.js";

import scrapeHackerNews from "./scraper/hackerNewsScraper.js";

// Connect DB
connectDB();

const PORT =
  process.env.PORT || 5000;

// Start Server
app.listen(PORT, async () => {
  console.log(
    `Server running on port ${PORT}`
  );

  // Auto Scrape on Startup
  await scrapeHackerNews();
});