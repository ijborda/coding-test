import { Application } from "express";
import homeRoutes from "./home.routes";
import BookRoutes from "./books.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/books", BookRoutes);
  }
}
