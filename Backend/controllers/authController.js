import admin from "../config/firebase.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const googleAuth = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token missing" });
  }

  try {

    const decoded = await admin.auth().verifyIdToken(token);
  
    const { name, email, picture } = decoded;
    console.log(name)
    console.log(email)
    
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }


    const jwtToken = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      token: jwtToken,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid Google token" });
  }
};
