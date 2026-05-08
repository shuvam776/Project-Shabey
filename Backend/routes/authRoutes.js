import express from "express";
import { googleAuth, updateProfile, getUser } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/google", googleAuth);
router.get("/user", protect, getUser);
router.put("/profile", protect, updateProfile);

export default router;

