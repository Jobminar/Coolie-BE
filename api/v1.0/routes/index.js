import express from "express";
import coreRoutes from "./core.routes.js";
import adminRoutes from "../../v1.0/modules/admin/auth/routes/admin.route.js";
// import serviceProviderRoutes from "./service-provider.routes.js";
import userRoutes from "../modules/users/auth/routes/user.route.js" ;

const app = express();

app.use("/core", coreRoutes);

app.use("/admin", adminRoutes);

// app.use("/service-providers", serviceProviderRoutes);

app.use("/users", userRoutes);

export default app;
