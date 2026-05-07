// src/pages/Home.jsx

import {
  useEffect,
  useState,
} from "react";

import StoryCard from "../components/StoryCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { getStories } from "../services/storyService";

const Home = () => {
  // Stories State
  const [stories, setStories] =
    useState([]);

  // Loading State
  const [loading, setLoading] =
    useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  // Fetch Stories
  const fetchStories = async () => {
    try {
      setLoading(true);

      const data =
        await getStories(
          currentPage,
          6
        );

      setStories(data.stories);

      setTotalPages(
        data.totalPages
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Run On Page Change
  useEffect(() => {
    fetchStories();
  }, [currentPage]);

  // Total Points
  const totalPoints =
    stories.reduce(
      (acc, story) =>
        acc + story.points,
      0
    );

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
          Discover the latest
          trending tech stories
          scraped directly from
          Hacker News.
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
              {totalPoints}
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
            Sorted by points in
            descending order.
          </p>
        </div>

        {/* Current Page */}
        <div className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
          Page {currentPage}
        </div>

      </div>

      {/* Loading */}
      {loading ? (
        <Loader />
      ) : (
        <>
          
          {/* Stories Grid */}
          <div className="grid gap-6">
            {stories.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={
              currentPage
            }
            totalPages={
              totalPages
            }
            setCurrentPage={
              setCurrentPage
            }
          />

        </>
      )}
    </div>
  );
};

export default Home;