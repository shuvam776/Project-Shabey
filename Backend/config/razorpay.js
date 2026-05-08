import dotenv from "dotenv";
import razorpay from "razorpay";

dotenv.config();
console.log(process.env.RAZORPAY_KEY_ID);
console.log(process.env.RAZORPAY_KEY_SECRET);

const instance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

export default instance;