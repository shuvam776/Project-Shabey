import express from 'express';
import authRoutes from './routes/authRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import productRoutes from './routes/productRoutes.js';

const app = express();
import cors from 'cors'
try {
    app.use(cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],

    }));

    app.get("/test", (req, res) => {
        res.json({ message: "Backend is alive and reachable!" });
    });
    console.log("corsdone")
} catch (error) {
    console.log("corsnotdone")
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/payment", paymentRoutes);
app.use("/upload", uploadRoutes);
app.use("/product", productRoutes)
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || "Internal Server Error" });
});

export default app;