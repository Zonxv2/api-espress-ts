import { Document, Model } from "mongoose";

export default class MongoRepository<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async getAll() {
    try {
      const response = await this.model.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async create(obj: any) {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, obj: any) {
    try {
      const response = await this.model.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
