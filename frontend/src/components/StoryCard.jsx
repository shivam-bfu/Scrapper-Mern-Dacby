import { useState } from "react";

import { toast } from "react-toastify";

import {
  toggleBookmark,
} from "../services/storyService";

import useAuth from "../hooks/useAuth";

const StoryCard = ({
  story = {
    title:
      "OpenAI releases a new AI model for developers",

    url:
      "https://news.ycombinator.com",

    points: 256,

    author: "shivam_dev",

    postedAt: "2 hours ago",
  },
}) => {
  const { token } = useAuth();

  const [
    isBookmarked,
    setIsBookmarked,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  // Handle Bookmark
  const handleBookmark =
    async () => {
      // Not Logged In
      if (!token) {
        toast.error(
          "Please login first"
        );

        return;
      }

      try {
        setLoading(true);

        const data =
          await toggleBookmark(
            story._id
          );

        // Toggle UI State
        setIsBookmarked(
          !isBookmarked
        );

        toast.success(
          data.message
        );
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Bookmark Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-orange-500">
      
      {/* Title */}
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold text-white transition hover:text-orange-400"
      >
        {story.title}
      </a>

      {/* Story Info */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
        
        <span>
          🔥 {story.points} Points
        </span>

        <span>
          👤 {story.author}
        </span>

        <span>
          🕒 {story.postedAt}
        </span>

      </div>

      {/* Bookmark Button */}
      <button
        onClick={handleBookmark}
        disabled={loading}
        className={`mt-5 rounded-lg px-4 py-2 text-sm font-medium text-white transition
          
          ${
            isBookmarked
              ? "bg-green-600 hover:bg-green-700"
              : "bg-orange-500 hover:bg-orange-600"
          }

          ${
            loading
              ? "cursor-not-allowed opacity-70"
              : ""
          }
        `}
      >
        {loading
          ? "Loading..."
          : isBookmarked
          ? "Bookmarked"
          : "Bookmark"}
      </button>

    </div>
  );
};

export default StoryCard;