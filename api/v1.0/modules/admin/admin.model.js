import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const admin = model("admin", adminSchema);
export default admin;
