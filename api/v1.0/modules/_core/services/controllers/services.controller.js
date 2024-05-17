import Service from "../models/services.model.js";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Multer configuration for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const constructImageUrl = (key) => `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

const serviceController = {
  createService: async (req, res) => {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "Error uploading image" });
      }

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
        } = req.body;

        let imageKey = null;
        if (req.file) {
          const fileContent = req.file.buffer;
          const fileExtension = path.extname(req.file.originalname);
          imageKey = `images/${uuidv4()}${fileExtension}`;
          const s3Params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: imageKey,
            Body: fileContent,
            ACL: 'public-read',
            ContentType: req.file.mimetype,
          };

          await s3.upload(s3Params).promise();
        }

        // Create a new service object
        const newService = new Service({
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
        console.error("Error creating service:", error);
        res.status(400).json({ message: error.message });
      }
    });
  },

  getServices: async (req, res) => {
    try {
      const services = await Service.find();

      // Map services to include the full image URL
      const servicesWithImageUrl = services.map(service => ({
        ...service._doc,
        imageUrl: constructImageUrl(service.imageKey),
      }));

      res.json(servicesWithImageUrl);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default serviceController;
