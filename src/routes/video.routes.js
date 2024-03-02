import { Router } from "express";
import {upload} from "../middleware/multer.middleware.js"
import { 
    uploadVideo,
    getVideos
 
} from "../controllers/video.controller.js";

const router = Router()
router.route("/uploadVideo").post(
    upload.fields([
        {
            name: "video",
            maxCount: 1
        },
        {
            name: "thumbnail",
            maxCount: 1
        }
    
    ]),
    uploadVideo)
router.route("/getVideos").get(getVideos)


    export default router