import mongoose from 'mongoose';

const TierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  image: { type: String, required: true },
  points: { type: String, required: true },
});

const LoyaltySchema = new mongoose.Schema({
  gold: TierSchema,
  silver: TierSchema,
  bronze: TierSchema,
});

export default mongoose.model('Loyalty', LoyaltySchema);
