import express from 'express';
import { register_user, login_user,logout_user, current_user, get_Cookie } from '../controller/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const auth_routes = express.Router()

auth_routes.post("/register",register_user)
auth_routes.post("/login",login_user)
auth_routes.post("/logout",logout_user)
auth_routes.post("/me",authMiddleware,current_user)
auth_routes.get("/getCookie",get_Cookie)

export default auth_routes