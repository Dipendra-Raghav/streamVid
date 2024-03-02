import { Video } from "../models/video.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js"

const uploadVideo = asyncHandler(async (req,res)=>{
    const {title } = req.body
    if ( !title) {
        throw new ApiError(400, "All fields are required")
    }

    const videoLocalPath = req.files?.video[0]?.path;
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;

    if (!videoLocalPath || !thumbnailLocalPath) {
        throw new ApiError(400, "Video or Thumbnail file is required")
    }
    console.log("hii");
    const video = await uploadOnCloudinary(videoLocalPath)
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath)

    if (!video || !thumbnail) {
        throw new ApiError(400, "Avatar or thumnail file not received from cloudinary")
    }

    const videos = await Video.create({
        videoFile: video.url,
        thumbnail: thumbnail.url,
        title
    })

    return res.status(201).json(
        new ApiResponse(200, videos, "User registered Successfully")
    )
    
});

const getVideos = asyncHandler(async (req, res) => {
    try {
      // Fetch all videos from the database
      console.log("chk print")
      const videos = await Video.find().sort({ createdAt: -1 }); // Assuming you want to sort by createdAt in descending order
      res.status(200).json(new ApiResponse(200, { videos }, "Videos retrieved successfully"));
    } catch (error) {
      console.error('Error fetching videos:', error);
      res.status(500).json(new ApiResponse(500, {}, 'Failed to fetch videos'));
    }
  });
  
export {
    uploadVideo,
    getVideos
}

