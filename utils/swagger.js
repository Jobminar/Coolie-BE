import path from "path";
import fs from "fs/promises";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import express from "express";
const app = express();

const __dirname = path.resolve();

const endpointsFiles = [
  path.join(__dirname, "./api/v1.0/modules/admin/auth/routes/admin.route.js"),
  path.join(
    __dirname,
    "./api/v1.0/modules/admin/loyalties/routes/loyalties.route.js",
  ),
  path.join(__dirname, "./api/v1.0/modules/users/auth/routes/user.route.js"),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/services/routes/service-variants.route.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/services/routes/services.route.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/services/routes/sub-categories.route.js",
  ),
];

const swaggerConfig = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "API Documentation",
    description: "Detailed description of CoolieNo1 API",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1.0",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ bearerAuth: [] }],
  tags: [
    {
      name: "Users",
      description: "Operations related to users",
    },
    {
      name: "Admin",
      description: "Admin-specific operations",
    },
    {
      name: "Razorpay",
      description: "Razorpay integration endpoints",
    },
    {
      name: "services",
      description: "Operations related to job postings and categories",
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition: swaggerConfig,
  apis: endpointsFiles,
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
  console.log(
    "Swagger documentation available at http://localhost:3000/api-docs",
  );
});
