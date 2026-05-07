// src/controllers/storyController.js

import Story from "../models/Story.js";

// GET ALL STORIES
export const getStories = async (
  req,
  res
) => {
  try {
    // Pagination
    const page =
      parseInt(req.query.page) || 1;

    const limit =
      parseInt(req.query.limit) || 10;

    const skip =
      (page - 1) * limit;

    // Fetch Stories
    const stories =
      await Story.find()
        .sort({ points: -1 })
        .skip(skip)
        .limit(limit);

    // Total Count
    const totalStories =
      await Story.countDocuments();

    res.status(200).json({
      stories,
      currentPage: page,
      totalPages: Math.ceil(
        totalStories / limit
      ),
      totalStories,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE STORY
export const getStoryById = async (
  req,
  res
) => {
  try {
    const story =
      await Story.findById(
        req.params.id
      );

    if (!story) {
      return res.status(404).json({
        message: "Story not found",
      });
    }

    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};