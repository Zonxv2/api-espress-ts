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
exports.productServices = void 0;
const error_custom_1 = require("../utils/error.custom");
const product_repository_1 = require("../repositories/product.repository");
class ProductServices {
    constructor() {
        this.repository = product_repository_1.productRepository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.getAll();
                if (!response)
                    throw new error_custom_1.NotFoundError("Error get all");
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.create(obj);
                if (!response)
                    throw new error_custom_1.NotFoundError("Error create");
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.update(id, obj);
                if (!response)
                    throw new error_custom_1.NotFoundError("Error update");
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.delete(id);
                if (!response)
                    throw new error_custom_1.NotFoundError("Error delete");
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.repository.getById(id);
                if (!response)
                    throw new error_custom_1.NotFoundError("Error getById");
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = ProductServices;
exports.productServices = new ProductServices();
