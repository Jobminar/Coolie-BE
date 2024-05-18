import serviceProviderRoutes from "../modules/provider/routes/provider-management.route.js";
import express from "express";
const app = express();

app.use("/service-providers", serviceProviderRoutes);

export default app;
