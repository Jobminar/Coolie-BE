import express from "express";
import catagoriesRoute from "../_core/jobs/routes/categories.route.js"
import serviceVariantsRoute from "../_core/jobs/routes/service-variants.route.js";
import servicesRoute from "../_core/jobs/routes/services.route.js";
import subCategoriesRoute from  "../_core/jobs/routes/sub-categories.route.js";
import loyaltiRouter from "../_core/loyalty/route/loyalti.route.js"
import walletRouter from "../_core/walltet/route/wallet.route.js"
import user from "../_core/users/routes/user.route.js"
const app = express();
app.use("/core/categories", catagoriesRoute);

app.use("/core/service-variants", serviceVariantsRoute);

app.use("/core/services", servicesRoute);

app.use("/core/sub-categories", subCategoriesRoute);

app.use("/core/loyalti",loyaltiRouter)

app.use("/core/wallet",walletRouter)

app.use("/core/user",user)
 
export default app;
