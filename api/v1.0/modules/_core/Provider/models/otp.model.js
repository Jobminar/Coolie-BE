import { Schema, model } from "mongoose";

const otpSchema = new Schema({
  clientId: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const OTP = model("OTP", otpSchema);

export default OTP;
