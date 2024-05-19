import { Schema, model } from "mongoose";

const serviceProviderFinanceSchema = new Schema({
  serviceProvider: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  pan: { type: String, unique: true },
  gst: { type: String, unique: true },
  account_name: { type: String, required: true },
  bank_name: { type: String, required: true },
  ifsc_code: { type: String, required: true },
  branch: { type: String, required: true },
});

export default model("ServiceProviderFinance", serviceProviderFinanceSchema);
