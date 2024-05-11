import AWS from 'aws-sdk';
import servicesSchema from '../models/services.model.js';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const serviceController = {
  createService: async (req, res) => {
    try {
      const { name, description, categoryId, subCategoryId, serviceVariants, locations, taxPercentage, providerCommission, isMostBooked, tag, isActive, isDeleted } = req.body;

      // Check if req.file exists and if it's an image
      if (!req.file || !req.file.mimetype.startsWith('image')) {
        return res.status(400).json({ message: 'Please upload an image file' });
      }

      // Upload image to AWS S3
      const imageKey = await uploadImageToS3(req.file);

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

      const service = await newService.save();

      // Return the created service
      res.status(201).json(service);
    } catch (error) {
      console.error('Error creating service:', error);
      res.status(400).json({ message: error.message });
    }
  },
};

// Function to upload image to AWS S3
const uploadImageToS3 = async (file) => {
  const base64Data = new Buffer.from(file.buffer, 'base64');
  const type = file.originalname.split('.')[1];
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${Date.now()}.${type}`,
    Body: base64Data,
    ACL: 'public-read',
    ContentEncoding: 'base64',
    ContentType: `image/${type}`,
  };
  const { Location } = await s3.upload(params).promise();
  return Location;
};

export default serviceController;
