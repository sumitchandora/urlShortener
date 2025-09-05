import { createRoute } from "@tanstack/react-router";
import rootRoute from "./rootRoute.js";
import { AllUrls } from "../pages/AllUrls.jsx";
import { checkAuth } from "../utils/helper.js";

export const allurlroute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/getallurl',
    component: AllUrls,
    beforeLoad:checkAuth
})