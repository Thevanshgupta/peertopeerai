import express from "express";
import { EditUser, Login, Register,AddKnowledge } from "../controllers/User.controller.js";
import isauthenticated from "../utils/isauthenticated.js";
const UserRouter = express.Router();

UserRouter.post("/register",Register);
UserRouter.post("/login",Login);
UserRouter.put("/edit",isauthenticated,EditUser);
UserRouter.post("/add",AddKnowledge);
export default UserRouter;	
