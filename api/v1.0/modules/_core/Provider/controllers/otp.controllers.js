import OTP from "../models/otp.model.js";

export async function submitOTP(req, res) {
  const { clientId, otp } = req.body;

  try {
    // Save OTP to the database
    const newOTP = new OTP({ clientId, otp });
    await newOTP.save();

    res.status(200).json({ message: "OTP submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit OTP" });
  }
}
