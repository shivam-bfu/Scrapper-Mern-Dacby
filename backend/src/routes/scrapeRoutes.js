import express from "express";

import { scrapeStories } from "../controllers/scrapeController.js";

const router = express.Router();

// SCRAPE STORIES
router.post("/", scrapeStories);

export default router;