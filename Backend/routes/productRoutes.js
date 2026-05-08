import { Router } from "express";
import { productController } from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleWares.js";
import { upload } from "../middlewares/multerMiddleWare.js";

const router = Router();

router.post("/add", protect, upload.single("image"), productController);

export default router;