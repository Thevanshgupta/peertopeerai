import express from "express";
import { GetAllUsers, Login, Register } from "../controllers/Admin.controller.js";

const AdminRouter = express.Router();

AdminRouter.post("/register",Register);
AdminRouter.post("/login",Login);
AdminRouter.get("/users",GetAllUsers);

export default AdminRouter;
