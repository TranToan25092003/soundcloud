import { Express } from "express";
import { topicsRouter } from "./topics.router";

export const clientRouter = (app: Express): void => {
  app.use("/topics", topicsRouter);
};
