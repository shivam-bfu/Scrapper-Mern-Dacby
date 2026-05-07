// src/controllers/bookmarkController.js

import User from "../models/User.js";

// TOGGLE BOOKMARK
export const toggleBookmark =
  async (req, res) => {
    try {
      const storyId =
        req.params.id;

      const user =
        await User.findById(
          req.user._id
        );

      // Check if already bookmarked
      const isBookmarked =
        user.bookmarks.includes(
          storyId
        );

      if (isBookmarked) {
        // Remove Bookmark
        user.bookmarks =
          user.bookmarks.filter(
            (bookmark) =>
              bookmark.toString() !==
              storyId
          );

        await user.save();

        return res.status(200).json({
          message:
            "Bookmark removed",
          bookmarks:
            user.bookmarks,
        });
      }

      // Add Bookmark
      user.bookmarks.push(storyId);

      await user.save();

      res.status(200).json({
        message: "Bookmarked",
        bookmarks: user.bookmarks,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// GET USER BOOKMARKS
export const getBookmarks =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user._id
        ).populate("bookmarks");

      res.status(200).json(
        user.bookmarks
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };