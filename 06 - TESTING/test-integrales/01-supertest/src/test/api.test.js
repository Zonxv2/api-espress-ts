// jest + supertest

import app from "../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";
import { createProductMock } from "../utils/mock.js";

describe("tests api productos", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/products");
    console.log("✅ Base de datos conectada");
    await mongoose.connection.collections["products"].drop();
    console.log("⏺ Coleccion products eliminada");
  });

  test("[POST] /products", async () => {
    const body = createProductMock();
    const response = await request(app).post("/products").send(body);

    expect(response.status).toBe(201);
    expect(response.body.data._id).toBeDefined();
    expect(response.body.data.title).toBe(body.title);
    expect(response.body.data.description).toBe(body.description);
    expect(response.body.data.price).toBe(body.price);
  });

  test("[GET] /products", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
    expect(response.body.data).toHaveLength(1);
  });

  test("[GET] /products/:id", async () => {
    const body = createProductMock();
    const response = await request(app).post("/products").send(body);
    const id = response.body.data._id;
    expect(response.status).toBe(201);
    expect(id).toBeDefined();

    const responseGetById = await request(app).get(`/products/${id}`);
    const data = responseGetById.body.data;
    expect(responseGetById.status).toBe(200);
    expect(data._id).toBe(id);
    expect(data.name).toBe(body.name);
    expect(data.description).toBe(body.description);
    expect(data.price).toBe(body.price);
    expect(data.stock).toBe(body.stock);

    const idFaker = faker.database.mongodbObjectId();
    const responseGetByIdFaker = await request(app).get(`/products/${idFaker}`);
    expect(responseGetByIdFaker.status).toBe(404);
    expect(responseGetByIdFaker.body.data).toBeUndefined();
    expect(responseGetByIdFaker.body.message).toBe("Product not found");
  });

  // test('[PUT] /products/:id', async () => {

  // })

  // test('[DELETE] /products/:id', async () => {

  // })
});
