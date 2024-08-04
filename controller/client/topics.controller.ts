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
    console.log(topics);
    res.render("client/pages/topics/index.pug");
  } catch (error) {
    res.send("error");
  }
};
