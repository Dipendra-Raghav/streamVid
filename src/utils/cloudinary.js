import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
        
cloudinary.config({ 
  cloud_name: 'dsmsebofj', 
  api_key: '485721213949692', 
  api_secret: 'X6YOaWwxMZaXEeMDkI9Cu9iz7Xo' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        console.log("hi: ",localFilePath);
        console.log("vaibhav");
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("hellow")
        // file has been uploaded successfull
        //console.log("hi")
        console.log("file is uploaded on cloudinary ", response.url);
        return response;

    } catch (error) {
        console.log("namstge: " , error)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary} 