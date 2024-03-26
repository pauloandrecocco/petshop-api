import "dotenv/config";
import express from "express";
import winston from "winston";
import cors from "cors";

// Routers
import proprietarioRouter from "./src/routes/proprietario.route.js";
import animalRouter from "./src/routes/animal.route.js";

const { combine, timestamp, label, printf } = winston.format;
const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console({
      // format: winston.format.simple(),
    }),
    new winston.transports.File({
      filename: "logs/petshop-api.log",
      // format: winston.format.simple(),
    }),
  ],
  format: combine(label({ label: "petshop-api" }), timestamp(), logFormat),
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);

app.listen(3000, async () => {
  logger.info("API rodando na porta 3000.");
});
