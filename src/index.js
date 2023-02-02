import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./router";
//divbC0N9Ijd4IWUQ
class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://joias:divbC0N9Ijd4IWUQ@cluster0.gv5aj8s.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //cors serve para definir limitações de uso da api criada
    this.server.use(cors());

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
