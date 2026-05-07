// src/pages/Bookmarks.jsx

import StoryCard from "../components/StoryCard";

const Bookmarks = () => {
  // TEMPORARY DUMMY DATA
  const bookmarkedStories = [
    {
      id: 1,
      title: "React 20 Released with New Features",
      url: "https://news.ycombinator.com",
      points: 420,
      author: "gaearon",
      postedAt: "1 hour ago",
    },
    {
      id: 2,
      title: "Node.js Performance Improvements in 2026",
      url: "https://news.ycombinator.com",
      points: 315,
      author: "tj",
      postedAt: "3 hours ago",
    },
    {
      id: 3,
      title: "Why Developers Love Tailwind CSS",
      url: "https://news.ycombinator.com",
      points: 198,
      author: "tailwinddev",
      postedAt: "5 hours ago",
    },
  ];

  return (
    <div>
      
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Your Bookmarks
        </h1>

        <p className="mt-2 text-zinc-400">
          Saved stories for later reading.
        </p>
      </div>

      {/* Empty State */}
      {bookmarkedStories.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">
            No Bookmarks Yet
          </h2>

          <p className="mt-3 text-zinc-400">
            Start bookmarking stories to see them here.
          </p>
        </div>
      ) : (
        /* Stories */
        <div className="grid gap-6">
          {bookmarkedStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Bookmarks;