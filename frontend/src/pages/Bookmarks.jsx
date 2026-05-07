import {
  useEffect,
  useState,
} from "react";

import Loader from "../components/Loader";

import {
  getBookmarks,
  toggleBookmark,
} from "../services/storyService";

import { toast } from "react-toastify";

const Bookmarks = () => {
  const [
    bookmarkedStories,
    setBookmarkedStories,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  // Fetch Bookmarks
  const fetchBookmarks =
    async () => {
      try {
        setLoading(true);

        const data =
          await getBookmarks();

        setBookmarkedStories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  // Remove Bookmark
  const removeBookmark =
    async (storyId) => {
      try {
        await toggleBookmark(
          storyId
        );

        setBookmarkedStories(
          bookmarkedStories.filter(
            (story) =>
              story._id !== storyId
          )
        );

        toast.success(
          "Bookmark removed"
        );
      } catch (error) {
        toast.error(
          "Failed to remove bookmark"
        );
      }
    };

  // On Load
  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div>
      
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Your Bookmarks
        </h1>

        <p className="mt-2 text-zinc-400">
          Saved stories for later
          reading.
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <Loader />
      ) : bookmarkedStories.length ===
        0 ? (
        
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">
            No Bookmarks Yet
          </h2>

          <p className="mt-3 text-zinc-400">
            Start bookmarking
            stories to see them
            here.
          </p>
        </div>
      ) : (
        
        /* Stories */
        <div className="grid gap-6">
          {bookmarkedStories.map(
            (story) => (
              <div
                key={story._id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-orange-500"
              >
                
                {/* Title */}
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white transition hover:text-orange-400"
                >
                  {story.title}
                </a>

                {/* Info */}
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

                {/* Remove Button */}
                <button
                  onClick={() =>
                    removeBookmark(
                      story._id
                    )
                  }
                  className="mt-5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  Remove Bookmark
                </button>

              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;