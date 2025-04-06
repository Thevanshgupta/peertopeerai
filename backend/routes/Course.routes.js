import express from "express";
import { CreateCourse, GetAllCourse } from "../controllers/Course.controller.js";

const CourseRouter = express.Router();

CourseRouter.post("/create",CreateCourse);
CourseRouter.get("/all",GetAllCourse);

export default CourseRouter;
