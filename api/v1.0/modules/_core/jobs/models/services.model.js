// models/services.js
import mongoose from "mongoose";
//this is merged by sameer
const servicesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageKey: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "subCategories" },
  serviceVariants: [
    {
      serviceVariantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "serviceVariants",
      },
      price: { type: Number, default: 0 },
      serviceTime: { type: Number, default: 0 },
    },
  ],
  locations: [
    {
      pincode: { type: Number },
      lat: { type: Number },
      long: { type: Number },
      address: { type: String },
      availableRadius: { type: Number }, 
    },
  ],
  taxPercentage: { type: Number, default: 0 },
  providerCommission: { type: Number, default: 0 },
  isMostBooked: { type: Boolean, default: true },
  tag: { type: Boolean, default: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  cos: { type: Boolean, default: true },
});

export default mongoose.model("services", servicesSchema);
