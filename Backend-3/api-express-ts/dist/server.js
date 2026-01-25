"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./config/swagger"));
const config_1 = __importDefault(require("./config"));
const db_connection_1 = require("./config/db.connection");
const logger_1 = require("./logs/logger");
const error_handler_1 = require("./middlewares/error.handler");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
(0, db_connection_1.initMongoDB)()
    .then(() => logger_1.logger.info("Connected to MongoDB"))
    .catch((err) => logger_1.logger.error(err));
app.use("/api", index_1.default);
app.use(error_handler_1.errorHandler);
app.listen(config_1.default.PORT, () => logger_1.logger.info("Server running on port ${config.PORT}"));
