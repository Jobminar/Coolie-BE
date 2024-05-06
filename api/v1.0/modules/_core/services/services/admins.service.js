import Admins from "../models/admins.js";

// Service function for creating a new admin
export const createAdmins = async (adminsData) => {
  const { phone, password } = adminsData;
  const admins = new Admins({ phone, password });
  return await admins.save();
};

// Service function for getting all admins
export const getAdmins = async () => {
  return await Admins.find();
};
