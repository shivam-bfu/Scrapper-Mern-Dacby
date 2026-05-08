import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-zinc-900">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          HackerNews
          <span className="text-orange-500">Hub</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          
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

              <div className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-300">
                {user.name}
              </div>

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

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-zinc-900 border-t border-zinc-800">
          
          <Link
            to="/"
            className="block text-zinc-300"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/bookmarks"
                className="block text-zinc-300"
                onClick={() => setOpen(false)}
              >
                Bookmarks
              </Link>

              <div className="text-zinc-400 text-sm">
                {user.name}
              </div>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="w-full rounded-lg bg-orange-500 px-4 py-2 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-zinc-300"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="block rounded-lg bg-orange-500 px-4 py-2 text-white text-center"
                onClick={() => setOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
