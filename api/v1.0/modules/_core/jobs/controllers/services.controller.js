import servicesSchema from "../models/services.model.js";
import dotenv from "dotenv";
import { imageUpload } from "../../../../../../utils/aws.utils.js";

dotenv.config();

const serviceController = {
  createService: async (req, res) => {
    try {
      // Extract necessary data from request body
      const { name, description, categoryId, subCategoryId, serviceVariants, locations, taxPercentage, providerCommission, isMostBooked, tag, isActive, isDeleted } = req.body;

      // Check if req.file exists and if it's an image
      if (!req.file || !req.file.mimetype.startsWith('image')) {
        return res.status(400).json({ message: 'Please upload an image file' });
      }

      // Upload image to AWS S3 and get the image URL
      const imageKey = await imageUpload(req.file.buffer.toString('base64'));

      // Create a new service object
      const newService = new servicesSchema({
        name,
        description,
        imageKey,
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
      console.error('Error creating service:', error);
      res.status(400).json({ message: error.message });
    }
  },

  getServices: async (req, res) => {
    try {
      const services = await servicesSchema.find();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default serviceController;
