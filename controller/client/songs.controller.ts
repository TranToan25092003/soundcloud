import { Request, Response } from "express";
import Singer from "../../model/singer.model";
import Song from "../../model/songs.model";
import Topic from "../../model/topics.model";

//# [GET] /songs/:slug
export const listSongsByTopic = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //get topic
    const topic = await Topic.findOne({
      slug: req.params.slug,
      status: "active",
      deleted: false,
    });

    //end get topic

    // find all songs
    const songs = await Song.find({
      topicId: topic.id,
      status: "active",
      deleted: false,
    }).select("avatar title slug singerId like");
    //end find all songs

    // get singer
    for (const item of songs) {
      const singerInfo = await Singer.findOne({
        _id: item.singerId,
        status: "active",
        deleted: false,
      });
      console.log(singerInfo);

      item["singerInfo"] = singerInfo;
    }
    //end get singer

    // send data to fe
    res.render("client/pages/songs/list.pug", {
      pagetitle: topic.title,
      song: songs,
    });
    //end
  } catch (error) {
    res.redirect("/topics");
  }
};
