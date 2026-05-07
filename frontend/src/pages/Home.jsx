// src/pages/Home.jsx

import { useState } from "react";

import StoryCard from "../components/StoryCard";
import Pagination from "../components/Pagination";

const Home = () => {
  // TEMPORARY DUMMY DATA
  const stories = [
    {
      id: 1,
      title: "OpenAI releases a new AI coding assistant",
      url: "https://news.ycombinator.com",
      points: 542,
      author: "openai_dev",
      postedAt: "1 hour ago",
    },
    {
      id: 2,
      title: "Why TypeScript is dominating frontend development",
      url: "https://news.ycombinator.com",
      points: 387,
      author: "frontend_master",
      postedAt: "3 hours ago",
    },
    {
      id: 3,
      title: "Node.js performance improvements in latest release",
      url: "https://news.ycombinator.com",
      points: 291,
      author: "node_core",
      postedAt: "5 hours ago",
    },
    {
      id: 4,
      title: "MongoDB introduces new scaling architecture",
      url: "https://news.ycombinator.com",
      points: 245,
      author: "mongodb_team",
      postedAt: "7 hours ago",
    },
  ];

  // Pagination State
  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = 5;

  return (
    <div>
      
      {/* Hero Section */}
      <div className="mb-10 rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 p-8">
        
        <h1 className="text-5xl font-extrabold leading-tight text-white">
          Hacker News{" "}
          <span className="text-orange-500">
            Stories
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Discover the latest trending tech stories scraped directly
          from Hacker News.
        </p>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-4">
          
          <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3">
            <p className="text-2xl font-bold text-white">
              {stories.length}
            </p>

            <p className="text-sm text-zinc-400">
              Stories
            </p>
          </div>

          <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3">
            <p className="text-2xl font-bold text-white">
              1.2K+
            </p>

            <p className="text-sm text-zinc-400">
              Total Points
            </p>
          </div>

        </div>

      </div>

      {/* Stories Header */}
      <div className="mb-6 flex items-center justify-between">
        
        <div>
          <h2 className="text-3xl font-bold text-white">
            Top Stories
          </h2>

          <p className="mt-1 text-zinc-400">
            Sorted by points in descending order.
          </p>
        </div>

        {/* Current Page */}
        <div className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
          Page {currentPage}
        </div>

      </div>

      {/* Stories Grid */}
      <div className="grid gap-6">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Home;