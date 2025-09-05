import { createRoute } from "@tanstack/react-router"
import rootRoute  from "./rootRoute.js"
import HomePage from "../pages/HomePage.jsx"

export const homePageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage
  })