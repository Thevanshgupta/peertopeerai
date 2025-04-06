import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/User.js";
import Course from "../models/Course.js";

const CreateCourse = async (req,res) => {
try {
   const {courseid,name,activites} = req.body;
   if(!courseid||!name || !activites) return res.status(400).json(new ApiResponse(false,"CourseId,Name and Activites are required"));
   const existingCourse = await Course.findOne({courseid:courseid});
   if(existingCourse) return res.status(400).json(new ApiResponse(false,"Course with this CourseId already exists"));
   await Course.create({courseid:courseid,name:name,activites:activites});
   res.status(201).json(new ApiResponse(true,"Course Created Successfully"));
} catch (error) {
   res.status(500).json(new ApiError(false,error.message));	
}
}
const AddCourse = async (req,res) => {
 try {
 const id = req.user.data;
 const user = await User.findById(id);
 if(!user) return res.status(404).json(new ApiResponse(false,"User Not Found"));
 const {courseid} = req.body;
 if(!courseid) return res.status(400).json(new ApiResponse(false,"Course Id is required")); 
 const course = await Course.findOne({courseid:courseid});
 if(!course) return res.status(400).json(new ApiResponse(false,"Course Not Found"));

 } catch (error) {
   res.status(500).json(new ApiError(false,error.message));	
 }
}

const GetAllCourse = async (req,res) => {
 try {
    const coursedata = await Course.find({});
    res.status(200).json(new ApiResponse(true,coursedata));
 } catch (error) {
   res.status(500).json(new ApiError(false,error.message));	
 }
}
export {CreateCourse,AddCourse,GetAllCourse};
