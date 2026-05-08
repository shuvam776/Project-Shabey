import { Router } from "express";
import { productController } from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/multerMiddleware.js";

const router = Router();

router.post("/add", protect, upload.single("image"), productController);

export default router;