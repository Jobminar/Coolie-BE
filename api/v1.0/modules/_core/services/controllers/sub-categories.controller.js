import AWS from "aws-sdk";
import Subcategory from "../models/sub-categories.model.js";
import { imageUpload } from "../../../../../../utils/aws.utils.js";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Multer configuration for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

const constructImageUrl = (key) => `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

export const createSubcategory = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: "Error uploading image" });
    }

    try {
      const { name, description, charges, offers, categoryId, serviceVariants } = req.body;

      if (!name || !description || !req.file || !charges || !offers || !categoryId || !serviceVariants) {
        return res.status(400).json({ message: "Please provide all required fields" });
      }

      // Upload the image to AWS S3
      const imageKey = await imageUpload(req.file);

      // Create a new subcategory object with the image key
      const subcategory = new Subcategory({
        name,
        description,
        imageKey, // Assign the image key here
        charges,
        offers,
        categoryId,
        serviceVariants,
        isActive: req.body.isActive || true,
        isDeleted: req.body.isDeleted || false,
        createdAt: req.body.createdAt || Date.now(),
        updatedAt: req.body.updatedAt || Date.now(),
      });

      // Save the subcategory to the database
      const savedSubcategory = await subcategory.save();
      
      // Respond with the created subcategory
      res.status(201).json(savedSubcategory);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  });
};

export const getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find();
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id);
    if (!subcategory) {
      return res.status(404).json({ message: "Subcategory not found" });
    }
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
