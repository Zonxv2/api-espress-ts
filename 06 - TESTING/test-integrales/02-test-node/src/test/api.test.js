// node

import test, { before, describe } from "node:test";
import assert from "node:assert";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";
import { createProductMock } from "../utils/mock.js";

const API_URL = "http://localhost:8080/products";

describe("tests api productos", () => {
  /*
  before(async () => {
    await mongoose.connection.dropCollection("products");
    console.log("⏺ Coleccion products eliminada");
  });
   */

  test("[POST] /products", async () => {
    const body = createProductMock();
    const responsePromise = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const response = await responsePromise.json();
    // console.log(response)
    const id = response.data._id;
    assert.ok(response);
    assert.strictEqual(responsePromise.status, 201);
    assert.strictEqual(response.status, 201);
    assert.ok(id);
    assert.strictEqual(response.data.name, body.name);
    assert.strictEqual(response.data.description, body.description);
    assert.strictEqual(response.data.price, body.price);
    assert.strictEqual(response.data.stock, body.stock);
  });

  test("[GET] /products", async () => {
    const responsePromise = await fetch(API_URL);
    const response = await responsePromise.json();
    assert.ok(response);
    assert.strictEqual(responsePromise.status, 200);
    assert.strictEqual(response.status, 200);
    assert.ok(response.data);
    assert.ok(Array.isArray(response.data));
    assert.ok(response.data.length > 1);
  });

  test("[GET] /products/:id", async () => {
    const body = createProductMock();
    const responsePostPromise = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responsePost = await responsePostPromise.json();
    const id = responsePost.data._id;
    const responseGetPromise = await fetch(`${API_URL}/${id}`);
    const responseGet = await responseGetPromise.json();
    assert.ok(responseGet);
    assert.strictEqual(responseGetPromise.status, 200);
    assert.strictEqual(responseGet.status, 200);
    assert.ok(responseGet.data);
    assert.strictEqual(responseGet.data._id, id);
    assert.strictEqual(responseGet.data.name, body.name);
    assert.strictEqual(responseGet.data.description, body.description);
    assert.strictEqual(responseGet.data.price, body.price);
    assert.strictEqual(responseGet.data.stock, body.stock);

    const idFacker = faker.database.mongodbObjectId();
    const responseGetFakerPromise = await fetch(`${API_URL}/${idFacker}`);
    const responseGetFaker = await responseGetFakerPromise.json();
    assert.ok(responseGetFaker);
    assert.strictEqual(responseGetFakerPromise.status, 404);
    assert.strictEqual(responseGetFaker.status, 404);
    assert.strictEqual(responseGetFaker.message, "Product not found");
  });

  // test("[PUT] /products/:id", async () => {});

  // test("[DELETE] /products/:id", async () => {});
});
