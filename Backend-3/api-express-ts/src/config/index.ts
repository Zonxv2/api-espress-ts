import dotenv from "dotenv";

dotenv.config();

console.log("ENV MONGO_URL:", process.env.MONGO_URL);

const config = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
};

export default config;
