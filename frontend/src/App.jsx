// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookmarks from "./pages/Bookmarks";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6">
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Login */}
            <Route
              path="/login"
              element={<Login />}
            />

            {/* Register */}
            <Route
              path="/register"
              element={<Register />}
            />

            {/* Protected Bookmarks */}
            <Route
              path="/bookmarks"
              element={
                
                  <Bookmarks />
                
              }
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </main>

        {/* Toast */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="dark"
        />

      </div>
    </BrowserRouter>
  );
};

export default App;