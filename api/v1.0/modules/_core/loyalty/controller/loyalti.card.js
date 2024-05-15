import LoyaltyModel from "../../loyalty/model/loyalti.model.js"
import { imageUpload } from "../../../../../../utils/aws.utils.js";

const LoyaltyController = {
    createLoyalty: async (req, res) => {
        try {
            const { bronze, silver, gold } = req.body;

            // Check if req.files exist and if they are images
            if (!req.files || Object.keys(req.files).length !== 3) {
                return res.status(400).json({ message: 'Please upload images for bronze, silver, and gold tiers' });
            }

            // Upload images to AWS S3 and get the image URLs
            const imageKeys = await Promise.all(Object.values(req.files).map(async (file) => {
                const imageKey = await imageUpload(file.data.toString('base64'));
                return imageKey;
            }));

            // Create new loyalty document with image URLs
            const newLoyalty = new LoyaltyModel({
                bronze: { ...bronze, image: imageKeys[0] },
                silver: { ...silver, image: imageKeys[1] },
                gold: { ...gold, image: imageKeys[2] }
            });

            // Save the new loyalty document
            const loyalty = await newLoyalty.save();

            // Return the created loyalty document
            res.status(201).json(loyalty);
        } catch (error) {
            console.error('Error creating loyalty tiers:', error);
            res.status(400).json({ message: error.message });
        }
    }
}

export default LoyaltyController;
