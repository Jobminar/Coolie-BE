import express from "express";

import authRouter from "../modules/admin/auth/routes/admin.route.js";

import loyaltiesRouter from "../modules/admin/loyalty/routes/loyalties.route.js";

const app = express();

app.use("/auth", authRouter);

app.use("/loyalties", loyaltiesRouter);

export default app;
