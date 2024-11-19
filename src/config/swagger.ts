import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Express API with TypeScript and Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000", // URL server
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Lokasi file route yang menggunakan anotasi Swagger
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Application): void => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Swagger docs available at http://localhost:3000/api-docs");
};
