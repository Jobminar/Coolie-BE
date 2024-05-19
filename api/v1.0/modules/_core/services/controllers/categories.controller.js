import AWS from "aws-sdk";
import Category from "../models/categories.model.js";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import dotenv from "dotenv";
import multer from "multer";


dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});  

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

// Function to upload image to S3
const uploadImageToS3 = async (file) => {
  const fileExtension = path.extname(file.originalname);
  const imageKey = `categories/${uuidv4()}${fileExtension}`;

  const s3Params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imageKey,
    Body: file.buffer,
    ACL: 'public-read',
    ContentType: file.mimetype,
  };

  const uploadResult = await s3.upload(s3Params).promise();
  return uploadResult.Key;
};

const categoriesController = {
  createCategory: async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "Error uploading image" });
      }

      try {
        const { name, description } = req.body;

        if (!name || !description || !req.file) {
          return res.status(400).json({ message: "Please provide all required fields" });
        }

        const imageKey = await uploadImageToS3(req.file);

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
        console.error("Error creating category:", error);
        res.status(400).json({ message: error.message });
      }
    });
  },

  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      console.error("Error retrieving categories:", error);
      res.status(500).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Error retrieving category by ID:", error);
      res.status(500).json({ message: error.message });
    }
  },
};

export default categoriesController;
