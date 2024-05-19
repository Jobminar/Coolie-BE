import { Schema, model } from "mongoose";

const serviceProviderSchema = new Schema({
  phone_no: { type: String, required: true, unique: true },
  aadhar_no: { type: String, unique: true },
  full_name: { type: String, required: true },
  work_details: [{ type: String, required: true }],
  pincode: [{ type: String, required: true }],
  experience_status: {
    type: String,
    enum: ["Experienced", "Fresher"],
    required: true,
  },
  age: { type: Number, required: true },
  work_experience: { type: Number, required: true },
});

export default model("ServiceProvider", serviceProviderSchema);
