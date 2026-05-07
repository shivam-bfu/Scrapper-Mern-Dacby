// src/pages/NotFound.jsx

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      
      {/* 404 */}
      <h1 className="text-8xl font-extrabold text-orange-500">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-4 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      {/* Subtitle */}
      <p className="mt-3 max-w-md text-zinc-400">
        The page you are looking for does not exist or may have been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default NotFound;