import express from "express";
import catagoriesRoute from "../_core/services/routes/categories.route.js";
const app = express();
app.use("/categories", catagoriesRoute);

export default app;
