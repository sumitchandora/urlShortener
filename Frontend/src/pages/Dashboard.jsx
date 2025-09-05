import { useState } from "react";
import React from "react";
import { UrlForm } from "../components/UrlForm";
import UserUrl from "../components/UserUrl.jsx";
import { MoreVertical } from "lucide-react";
import { logout } from "../api/user.api.js";
import { Link } from "@tanstack/react-router";
import { useDispatch } from "react-redux";
import { logoutt } from "../store/slice/authSlice.js";

export const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Shorten a long URL
        </h1>

        <UrlForm />
      </div>
    </div>
  );
};
