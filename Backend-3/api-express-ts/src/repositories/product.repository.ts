import { Model } from "mongoose";
import { ProductMongoose } from "../types/product.type";
import MongoRepository from "./mongo.repository";
import { ProductModel } from "../models/product.model";

export class ProductRepository extends MongoRepository<ProductMongoose> {
    constructor(model: Model<ProductMongoose>) {
        super(model)
    }
}

export const productRepository = new ProductRepository(ProductModel)
