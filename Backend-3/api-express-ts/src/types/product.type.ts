import { Document } from "mongoose";

export interface Product {
    name: string;
    description: string;
    price: number;
    stock: number;
}

export type ProductType = {
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Product2 extends Product {
    color: string;
}

export type ProductType2 = ProductType & {
    color: string;
}

export type Product3 = Pick<Product, 'name' | 'description'>

export type Product4 = Omit<Product, 'stock'>

export type ProductMongoose = ProductType & Document;