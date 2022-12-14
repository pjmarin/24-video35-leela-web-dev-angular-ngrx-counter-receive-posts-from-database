import { Router } from "express";
import { getPosts, addPost } from "../controllers/auth.controller.js";

const router = Router();

router.post("/addPost", addPost);
router.get("/getPosts", getPosts);

export default router;