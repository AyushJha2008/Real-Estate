import express from "express";
import { getContent, updateContent } from "../controllers/content.controller.js";

const router = express.Router();

router.get("/", getContent);
router.put("/", updateContent);

export default router;
