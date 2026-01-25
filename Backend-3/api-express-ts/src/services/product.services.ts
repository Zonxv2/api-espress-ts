import { ProductType } from "../types/product.type";
import { NotFoundError } from "../utils/error.custom";
import { ProductRepository, productRepository } from "../repositories/product.repository";

export default class ProductServices {
  private repository: ProductRepository; 

  constructor() {
    this.repository = productRepository;
  }
  async getAll() {
    try {
      const response = await this.repository.getAll();
      if (!response) throw new NotFoundError("Error get all");
      return response;
    } catch (error) {
      throw error;
    }
  }
  async create(obj: ProductType) {
    try {
      const response = await this.repository.create(obj);
      if (!response) throw new NotFoundError("Error create");
      return response;
    } catch (error) {
      throw error;
    }
  }
  async update(id: string, obj: ProductType) {
    try {
      const response = await this.repository.update(id, obj);
      if (!response) throw new NotFoundError("Error update");
      return response;
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string) {
    try {
      const response = await this.repository.delete(id);
      if (!response) throw new NotFoundError("Error delete");
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getById(id: string) {
    try {
      const response = await this.repository.getById(id);
      if (!response) throw new NotFoundError("Error getById");
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const productServices = new ProductServices();
