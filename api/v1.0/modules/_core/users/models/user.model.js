import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  uid: { type: String, unique: true },
  provider: String,
});

const User = model("User", userSchema);

export default User;
