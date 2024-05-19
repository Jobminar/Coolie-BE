import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageKey: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories" },
  serviceVariants: [
    {
      serviceVariantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "serviceVariants",
      },
      isActive: { type: Boolean, default: true },
    },
  ],
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Subcategory", subcategorySchema);
