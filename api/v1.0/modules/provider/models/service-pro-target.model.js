import { Schema, model } from "mongoose";

const serviceProviderTargetsSchema = new Schema({
  serviceProvider: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  total_earnings: { type: Number, default: 0 },
  upcoming_earnings: { type: Number, default: 0 },
  daily_earnings: { type: Number, default: 0 },
  monthly_earnings: { type: Number, default: 0 },
  credits: { type: Number, default: 0 },
  sp_rating: { type: Number, min: 0, max: 5, default: 0 },
  response_rate: { type: Number, min: 0, max: 100, default: 0 },
  cancellation_rate: { type: Number, min: 0, max: 100, default: 0 },
  total_working_hours: { type: Number, default: 0 },
});

export default model("ServiceProviderTargets", serviceProviderTargetsSchema);
