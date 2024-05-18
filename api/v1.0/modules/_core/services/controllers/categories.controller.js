import AWS from "aws-sdk";
import Category from "../models/categories.model.js"
import { imageUpload } from "../../../../../../utils/aws.utils.js"
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION, // Make sure to include the region
});  

// Multer configuration for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

export const createCategory = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: "Error uploading image" });
    }

    try {
      const { name, description } = req.body;

      if (!name || !description || !req.file) {
        return res
          .status(400)
          .json({ message: "Please provide all required fields" });
      }

      const imageKey = await imageUpload(req.file);

      const category = new Category({
        name,
        description,
        imageKey,
        createdAt: req.body.createdAt || Date.now(),
        updatedAt: req.body.updatedAt || Date.now(),
      });

      await category.save();
      res.status(201).json(category);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  });
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
