
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // TEMPORARY
  // Later replace with Context API
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-orange-500"
        >
          HackerNews
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-orange-500"
                  : "text-zinc-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          {token && (
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-zinc-300 hover:text-white"
                }`
              }
            >
              Bookmarks
            </NavLink>
          )}

          {!token ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-zinc-300 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600`
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;