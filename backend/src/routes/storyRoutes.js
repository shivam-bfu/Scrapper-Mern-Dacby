// src/routes/storyRoutes.js

import express from "express";

import {
  getStories,
  getStoryById,
} from "../controllers/storyController.js";

import {
  toggleBookmark,
  getBookmarks,
} from "../controllers/bookmarkController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// GET ALL STORIES
router.get("/", getStories);

// GET USER BOOKMARKS
router.get(
  "/bookmarks/all",
  protect,
  getBookmarks
);

// GET SINGLE STORY
router.get("/:id", getStoryById);

// TOGGLE BOOKMARK
router.post(
  "/:id/bookmark",
  protect,
  toggleBookmark
);

export default router;