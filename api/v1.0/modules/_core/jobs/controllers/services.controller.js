import Service from "../models/services.model.js";
import AWS from "aws-sdk";
import { imageUpload } from "../../../../../../utils/aws.utils.js";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const serviceController = {
  createService: async (req, res) => {
    try {
      // Extract necessary data from request body
      const {
        name,
        description,
        categoryId,
        subCategoryId,
        serviceVariants,
        locations,
        taxPercentage,
        providerCommission,
        isMostBooked,
        tag,
        isActive,
        isDeleted,
        image, // Assuming image is a base64-encoded string in the request body
      } = req.body;

      // Create a new service object
      const newService = new Service({
        name,
        description,
        image,
        categoryId,
        subCategoryId,
        serviceVariants,
        locations,
        taxPercentage,
        providerCommission,
        isMostBooked,
        tag,
        isActive,
        isDeleted,
      });

      // Save the new service to the database
      const service = await newService.save();

      // Return the created service
      res.status(201).json(service);
    } catch (error) {
      console.error("Error creating service:", error);
      res.status(400).json({ message: error.message });
    }
  },

  getServices: async (req, res) => {
    try {
      const services = await Service.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default serviceController;
