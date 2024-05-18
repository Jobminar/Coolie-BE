// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./api/v1.0/routes/index.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/v1.0", router);

const PORT = process.env.PORT 

app.listen(PORT, () => console.log(`server running ${PORT}`));
