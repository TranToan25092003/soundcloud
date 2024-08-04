import { Express } from "express";
import { topicsRouter } from "./topics.router";
import { songsRouter } from "./songs.router";

export const clientRouter = (app: Express): void => {
  app.use("/topics", topicsRouter);
  app.use("/songs", songsRouter);
};
