import express from "express";
import catagoriesRoute from "../modules/_core/services/routes/categories.route.js";
import serviceVariantsRoute from "../modules/_core/services/routes/service-variants.route.js";
import servicesRoute from "../modules/_core/services/routes/services.route.js";
import subCategoriesRoute from "../modules/_core/services/routes/sub-categories.route.js";

const app = express();

app.use("/categories", catagoriesRoute);

app.use("/service-variants", serviceVariantsRoute);

app.use("/services", servicesRoute);

app.use("/sub-categories", subCategoriesRoute);

export default app;
