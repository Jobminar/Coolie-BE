import express from "express";
import catagoriesRoute from "../_core/jobs/routes/categories.route.js";
import serviceVariantsRoute from "../_core/jobs/routes/service-variants.route.js";
import servicesRoute from "../_core/jobs/routes/services.route.js";
import subCategoriesRoute from "../_core/jobs/routes/sub-categories.route.js";
import razorpayRoute from "../_core/users/routes/razorpay.route.js";
import serviceRoute from "../_core/Provider/routes/otp.route.js";

const app = express();
app.use("/core/categories", catagoriesRoute);

app.use("/core/service-variants", serviceVariantsRoute);

app.use("/core/services", servicesRoute);

app.use("/core/sub-categories", subCategoriesRoute);

app.use("/razorpay", razorpayRoute);

app.use("/verify-provider", serviceRoute);

export default app;
