import express from 'express';
import { getAllUrl } from '../controller/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const get_urls_router = express.Router()

get_urls_router.post("/getAllUrls",authMiddleware,getAllUrl)

export default get_urls_router;