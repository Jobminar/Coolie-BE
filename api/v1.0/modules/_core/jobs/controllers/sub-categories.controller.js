import AWS from "aws-sdk";
import Subcategory from "../models/sub-categories.model.js"
import {imageUpload} from "../../../../../../utils/aws.utils.js"

import dotenv from "dotenv";

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const createSubcategory = async (req, res) => {
  try {
    const { name, description, image, charges, offers } = req.body;
   
    const imageKey= await imageUpload(image)
    
     console.log("image key",imageKey)

    // Create subcategory with S3 image U
    const subcategory = new Subcategory({
      name,
      description,
      imageKey,
      charges,
      offers,
    });

    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
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



