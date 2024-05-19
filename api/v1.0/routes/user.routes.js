import express from "express";

import walletRouter from "../modules/users/wallet/route/wallet.route.js";
import authRouter from "../modules/users/auth/routes/user.route.js";

const app = express();

app.use("/auth", authRouter);

app.use("/wallet", walletRouter);

export default app;
