// src/components/Navbar.jsx

import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } =
    useAuth();

  return (
    <header className="border-b border-zinc-800 bg-zinc-900">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          HackerNews
          <span className="text-orange-500">
            Hub
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-4">
          
          <Link
            to="/"
            className="text-zinc-300 transition hover:text-orange-500"
          >
            Home
          </Link>

          {user ? (
            <>
              
              <Link
                to="/bookmarks"
                className="text-zinc-300 transition hover:text-orange-500"
              >
                Bookmarks
              </Link>

              {/* User */}
              <div className="hidden rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300 md:block">
                {user.name}
              </div>

              {/* Logout */}
              <button
                onClick={logout}
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Logout
              </button>

            </>
          ) : (
            <>
              
              <Link
                to="/login"
                className="text-zinc-300 transition hover:text-orange-500"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Register
              </Link>

            </>
          )}

        </nav>

      </div>

    </header>
  );
};

export default Navbar;