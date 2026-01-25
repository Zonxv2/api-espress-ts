import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Backend-3",
      version: "1.0.0",
      description: "Documentación de la API para el proyecto Backend-3",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // rutas donde buscar @swagger
};

const swaggerSpec = swaggerJsdoc(options);
export { swaggerSpec };