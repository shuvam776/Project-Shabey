import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    usertype: {
      type: String,
      enum: ["buyer", "seller"],
      default: "buyer",
    },
    address: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },  
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },

    provider: {
      type: String,
      default: "google",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
