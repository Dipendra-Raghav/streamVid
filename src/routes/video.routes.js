import { Router } from "express";
import {upload} from "../middleware/multer.middleware.js"
import { 
    uploadVideo
 
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

    export default router