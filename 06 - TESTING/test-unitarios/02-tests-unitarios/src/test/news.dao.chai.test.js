// mocha + chai

import { expect } from "chai";
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
    expect(response).to.be.an("array");
    expect(response.length).to.be.equal(0);
    expect(response).to.have.lengthOf(0);
  });

  it("Deberia registrar una noticia", async () => {
    const body = {
      title: "Noticia1",
      body: "cuerpo de la noticia.....",
      author: "Juan Perez",
      image: "imagen.jpg",
    };

    const response = await newsDao.createNew(body);
    expect(response).to.be.an("object");
    expect(response).to.have.property("_id");
    expect(response.title).to.be.equal(body.title);
    expect(response.body).to.be.equal(body.body);
    expect(response.author).to.be.equal(body.author);
    expect(response.image).to.be.equal(body.image);
    const responseGetAll = await newsDao.getAllNews();
    expect(responseGetAll).to.be.an("array");
    expect(responseGetAll.length).to.be.equal(1);
    expect(responseGetAll).to.have.lengthOf(1);
  });
});
