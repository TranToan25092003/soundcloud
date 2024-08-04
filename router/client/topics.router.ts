import { Router } from "express";
import * as controller from "../../controller/client/topics.controller";
const router: Router = Router();

//# [GET] /topics
router.get("/", controller.getAllTopics);

export const topicsRouter: Router = router;
