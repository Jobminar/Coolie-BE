import { post } from "axios";

export async function submitOTPToSurepass(clientId, otp) {
  const apiUrl = "https://sandbox.surepass.io/api/v1/aadhaar-v2/submit-otp";
  const req = { clientId, otp };
  const token = "YOUR_TOKEN_HERE"; // Your token

  try {
    const response = await post(apiUrl, req, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to submit OTP to Surepass");
  }
}
