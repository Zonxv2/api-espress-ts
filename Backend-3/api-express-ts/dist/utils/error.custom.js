"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnhauthorizedError = exports.NotFoundError = exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
exports.ValidationError = ValidationError;
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "Not Found";
    }
}
exports.NotFoundError = NotFoundError;
class UnhauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnhauthorizedError";
    }
}
exports.UnhauthorizedError = UnhauthorizedError;
