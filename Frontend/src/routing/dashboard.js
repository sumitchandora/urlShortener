import { createRoute } from "@tanstack/react-router"
import rootRoute from "./rootRoute.js"
import { DashboardPage } from "../pages/Dashboard.jsx"
import { checkAuth } from "../utils/helper.js"

export const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad:checkAuth
})