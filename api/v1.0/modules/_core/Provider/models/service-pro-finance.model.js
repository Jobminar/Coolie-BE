import { Schema, model } from "mongoose";

const serviceProviderFinanceSchema = new Schema({
  serviceProviderId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  accountName: {
    type: String,
    required: true,
    trim: true,
  },
  bankName: {
    type: String,
    required: true,
    trim: true,
  },
  IFSC: {
    type: String,
    required: true,
    uppercase: true,
    match: [/^[A-Za-z]{4}\d{7}$/, "Please fill a valid IFSC code"],
    trim: true,
  },
  panNumber: {
    type: String,
    required: true,
    trim: true,
  },
});

export default model("ServiceProviderFinance", serviceProviderFinanceSchema);
