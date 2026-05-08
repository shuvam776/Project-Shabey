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
        avatar: picture || "",
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

export const updateProfile = async (req, res) => {
  try {
    const { name, bio, phone } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (bio !== undefined) user.bio = bio;
    if (phone) user.phone = phone;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

