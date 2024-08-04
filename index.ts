import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { clientRouter } from "./router/client/index.router";

dotenv.config(); //dotenv

// server
const app: Express = express();
const port: number | string = process.env.PORT;
//end server

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//end body parser

database.connect(); // connect to db

app.use(express.static("public")); // use static file (Html css)

// setup view
app.set("views", "./views");
app.set("view engine", "pug");
//end setup view

// use router client
clientRouter(app);
//end use router client

app.listen(port, (): void => {
  console.log(`server is running at ${port}`);
});
