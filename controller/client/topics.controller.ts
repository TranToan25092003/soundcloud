import { Request, Response } from "express";
import Topic from "../../model/topics.model";

//# [GET] /topics
export const getAllTopics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const topics = await Topic.find({
      deleted: false,
    });

    res.render("client/pages/topics/index.pug", {
      pagetitle: "topic songs",
      topics: topics,
    });
  } catch (error) {
    res.send("error");
  }
};
