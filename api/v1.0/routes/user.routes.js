import express from "express";

import walletRouter from "../modules/_core/walltet/route/wallet.route.js";
import authRouter from "../modules/users/routes/user.route.js";

const app = express();

app.use("/auth", authRouter);

app.use("/wallet", walletRouter);

export default app;
