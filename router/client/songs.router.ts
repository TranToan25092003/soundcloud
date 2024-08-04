import { Router } from "express";
import * as controller from "../../controller/client/songs.controller";
const router: Router = Router();

//# [GET] /songs/:slug
router.get("/:slug", controller.listSongsByTopic);

export const songsRouter: Router = router;
