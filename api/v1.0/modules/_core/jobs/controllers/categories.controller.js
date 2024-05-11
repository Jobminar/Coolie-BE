import AWS from "aws-sdk";
import Category from "../models/categories.model.js";
import { imageUpload } from "../../../../../../utils/aws.utils.js";
import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const createCategory = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    if (!name || !description || !image) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const imageKey = await imageUpload(image);

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
