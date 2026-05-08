import express from "express";
import multer from "multer";
import { uploadImage } from "../controllers/cloudinaryController.js";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post("/image", upload.single("image"), uploadImage);

export default router;
