"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = exports.ProductRepository = void 0;
const mongo_repository_1 = __importDefault(require("./mongo.repository"));
const product_model_1 = require("../models/product.model");
class ProductRepository extends mongo_repository_1.default {
    constructor(model) {
        super(model);
    }
}
exports.ProductRepository = ProductRepository;
exports.productRepository = new ProductRepository(product_model_1.ProductModel);
