// mocha + assert(node)

import assert from 'node:assert'
import mongoose from "mongoose";
import { newsDao } from "../persistence/DAOS/mongo/news.mongo.dao.js";

describe("Tests unitarios de Dao News", () => {
  before(async () => {
    await mongoose.connect("mongodb://localhost:27017/coderhouse");
    console.log("Base de datos conectada");
    await mongoose.connection.collections["news"].drop();
    console.log("Coleccion news vacia");
  });

  after(() => console.log("pruebas finalizadas"));

  it("Deberia retornar el listado de noticias", async () => {
    const response = await newsDao.getAllNews();
    assert.equal(Array.isArray(response), true);
    assert.equal(response.length, 0)
  });

  it("Deberia registrar una noticia", async () => {
    const body = {
      title: "Noticia1",
      body: "cuerpo de la noticia.....",
      author: "Juan Perez",
      image: "imagen.jpg",
    };

    const response = await newsDao.createNew(body);
    
    assert.ok(response._id)
    assert.equal(response.title, body.title)
    assert.equal(response.body, body.body)
    assert.equal(response.author, body.author)
    assert.equal(response.image, body.image)

    const responseGet = await newsDao.getAllNews();
    assert.equal(responseGet.length, 1)
  });
});
