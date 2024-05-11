import express from "express";
import catagoriesRoute from "../_core/services/routes/categories.route.js";
import serviceVariantsRoute from "../_core/services/routes/service-variants.route.js";
import servicesRoute from "../_core/services/routes/services.route.js";
import subCategoriesRoute from  "../_core/services/routes/sub-categories.route.js";

const app = express();
app.use("/core/categories", catagoriesRoute);

app.use("/core/service-variants", serviceVariantsRoute);

app.use("/core/services", servicesRoute);

app.use("/core/sub-categories", subCategoriesRoute);
 
export default app;
