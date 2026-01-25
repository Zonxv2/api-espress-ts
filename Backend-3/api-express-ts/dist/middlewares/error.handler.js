"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_response_1 = require("../utils/http.response");
const logger_1 = require("../logs/logger");
const error_custom_1 = require("../utils/error.custom");
const errorHandler = (error, req, res, _next) => {
    logger_1.logger.error({
        name: error.name,
        message: error.message,
        url: req.url
    });
    if (error instanceof error_custom_1.NotFoundError)
        return http_response_1.httpResponse.NotFound(res, error.message);
    if (error instanceof error_custom_1.UnhauthorizedError)
        return http_response_1.httpResponse.Unauthorized(res, error.message);
    return http_response_1.httpResponse.ServerError(res, error, req.url);
};
exports.errorHandler = errorHandler;
