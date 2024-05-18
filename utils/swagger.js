import path from "path";
import fs from "fs/promises";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerAutogen from "swagger-autogen";
import express from "express";
const app = express();

const __dirname = path.resolve();

// Route Files (Including Jobs Routes)
const endpointsFiles = [
  path.join(__dirname, "./api/v1.0/modules/_core/users/routes/admin.route.js"),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/users/routes/razorpay.route.js",
  ),
  path.join(__dirname, "./api/v1.0/modules/_core/users/routes/user.route.js"),
  // Jobs Routes
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/routes/categories.route.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/routes/service-variants.route.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/routes/services.route.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/routes/sub-categories.route.js",
  ),
];

// Schema Files
const schemaFiles = [
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/models/categories.model.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/models/service-variants.model.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/models/services.model.js",
  ),
  path.join(
    __dirname,
    "./api/v1.0/modules/_core/jobs/models/sub-categories.model.js",
  ),
];

// Swagger configuration object
const swaggerConfig = {
  info: {
    version: "1.0.0",
    title: "API Documentation",
    description: "Detailed description of CoolieNo1 API",
  },
  host: "localhost:3000",
  basePath: "/api/v1.0",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
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
      name: "Jobs",
      description: "Operations related to job postings and categories",
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
};

// Swagger JSDoc options
const swaggerOptions = {
  definition: swaggerConfig,
  apis: [...endpointsFiles, ...schemaFiles],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Function to set up Swagger UI and generate output
async function setupSwaggerDocs(app) {
  // Use swaggerAutogen to generate the initial swagger-output.json
  const outputFile = path.join(__dirname, "swagger-output.json");
  await swaggerAutogen()(outputFile, endpointsFiles, swaggerConfig);

  // Serve Swagger UI at '/api-docs'
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(
    `Swagger documentation available at http://${swaggerConfig.host}/api-docs`,
  );
}

// Start the server after Swagger setup
setupSwaggerDocs(app)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error("Error starting server:", err);
  });
