import express from 'express';
import authRoutes from './routes/authRoutes.js'
const app = express();
import cors from 'cors'
try{
app.use(cors({
    
    origin : process.env.CORS_ORIGIN,
    credentials :true,
    methods : ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-type","Authorization"],

}));
console.log("corsdone")
}catch(error){
    console.log("corsnotdone")
}

app.use(express.json());

app.use("/auth", authRoutes);

export default app;