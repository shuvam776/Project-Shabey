
import crypto from "crypto";
import instance from "../config/razorpay.js";
export const createOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        if (!amount) {
            return res.status(400).json({ message: "amount is required" });
        }

        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            return res.status(500).json({ message: "Razorpay keys are not configured" });
        }
        const options = {
            amount: Math.ceil(amount * 100),
            currency: "INR",
            receipt: "receipt_" + Math.random().toString(36).substring(7),
        };

        const order = await instance.orders.create(options);
        res.status(200).json(order);
        console.log(order);
    } catch (error) {
        console.error("Razorpay Create Order Error:", error);
        res.status(500).json({ 
            message: "Razorpay error", 
            details: error.message || error.error || error 
        });
    }
};

export const verifyOrder = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!process.env.RAZORPAY_KEY_SECRET) {
            return res.status(500).json({ message: "Razorpay secret is not configured" });
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
                                          