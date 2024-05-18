import mongoose from "mongoose";

const { Schema } = mongoose;

const serviceProviderRatingSchema = new Schema({
  serviceProviderId: {
    type: Number,
    required: [true, "Service provider ID is required"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: [0, "Rating cannot be negative"],
    max: [5, "Rating cannot exceed 5"],
  },
  review: {
    type: String,
    trim: true,
  },
  weekendHours: {
    type: String,
  },
  responseRate: {
    type: Number,
    default: 100,
  },
  cancellation: {
    type: Number,
    default: 0,
  },
});

const ServiceProviderRating = mongoose.model(
  "ServiceProviderRating",
  serviceProviderRatingSchema,
);

export default ServiceProviderRating;
