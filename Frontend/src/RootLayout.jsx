import React, { useState } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage.jsx';
import { AuthPage } from './pages/AuthPage.jsx';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/NavBar.jsx';

function RootLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}

export default RootLayout;
