import mongoose from "mongoose";

const { Schema } = mongoose;

const serviceProviderSchema = new Schema({
  serviceProviderId: { type: Number, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  work: { type: String },
  pincode: { type: String },
  popularCategories: [{ type: String }],
  allCategories: [{ type: String }],
  isExperienced: { type: Boolean },
  age: { type: Number },
  workExperience: { type: Number },
  email: { type: String, required: true },
  serviceProviderRating: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProviderRating",
  },
  serviceProviderFinance: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProviderFinance",
  },
});

const ServiceProvider = mongoose.model(
  "ServiceProvider",
  serviceProviderSchema,
);

export default ServiceProvider;
