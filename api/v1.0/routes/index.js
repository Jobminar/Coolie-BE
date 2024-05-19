import express from "express";
import coreRoutes from "./core.routes.js";
import adminRoutes from "./admin.routes.js";
import providerRoutes from "./service-provider.routes.js";
import userRoutes from "./user.routes.js";

const app = express();

app.use("/core", coreRoutes);

app.use("/admin", adminRoutes);

app.use("/service-providers", providerRoutes);

app.use("/users", userRoutes);

export default app;
