import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { logout } from "../api/user.api.js";
import { useSelector, useDispatch } from "react-redux";
import { logoutt } from "../store/slice/authSlice.js";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.auth.user);

  const [openMenu, setopenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setopenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    useDispatch(logoutt());
    setOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold px-4 py-2 text-gray-800">
        🔗 URL Shortener
      </Link>

      {isAuthenticated && (
        <div className="relative flex justify-end" ref={menuRef}>
          {/* Button */}
          <div>
            <Link
              to="/getallurl"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-full mr-5"
            >
              All URLS
            </Link>

            <button
              onClick={() => setopenMenu(!openMenu)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-full"
            >
              👤 {userName?.user?.name ?? ""}
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg">
                <div className="px-4 py-2 border-b">
                  <p className="font-medium">
                    👤 {userName?.user?.name ?? "...."}
                  </p>
                  <p className="text-sm text-gray-500">
                    ✉️ {userName?.user?.name ?? "...."}
                  </p>
                </div>
                <Link
                  to="/"
                  onClick={() => {
                    handleLogout();
                  }}
                  className="w-full text-1xl px-4 py-3 text-red-500 hover:text-red-600 "
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
