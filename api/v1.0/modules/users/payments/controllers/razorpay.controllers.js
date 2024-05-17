// razorpay.service.js
import Razorpay from "razorpay";
import { v4 as uuidv4 } from "uuid";

const razorpay = new Razorpay({
  key_id: "your_razorpay_key_id",
  key_secret: "your_razorpay_key_secret",
});

export const createOrder = async (amount) => {
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: uuidv4(),
  };

  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (error) {
    throw new Error("Unable to create order.");
  }
};

export const createPayment = async (paymentId, amount) => {
  try {
    const payment = razorpay.payments.capture(paymentId, amount * 100);
    return payment;
  } catch (error) {
    throw new Error("Payment capture failed.");
  }
};
