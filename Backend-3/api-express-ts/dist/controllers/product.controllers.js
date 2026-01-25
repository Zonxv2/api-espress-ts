"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_services_1 = require("../services/product.services");
const http_response_1 = require("../utils/http.response");
class ProductController {
    constructor(service) {
        this.getAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.service.getAll();
                return http_response_1.httpResponse.Ok(res, response);
            }
            catch (error) {
                next(error);
            }
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield this.service.getById(id);
                return http_response_1.httpResponse.Ok(res, response);
            }
            catch (error) {
                next(error);
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.service.create(req.body);
                return http_response_1.httpResponse.Ok(res, response);
            }
            catch (error) {
                next(error);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield this.service.update(id, req.body);
                return http_response_1.httpResponse.Ok(res, response);
            }
            catch (error) {
                next(error);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield this.service.delete(id);
                return http_response_1.httpResponse.Ok(res, response);
            }
            catch (error) {
                next(error);
            }
        });
        this.service = service;
    }
}
exports.productController = new ProductController(product_services_1.productServices);
