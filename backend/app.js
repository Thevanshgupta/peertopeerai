import express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/User.routes.js"
import Connectdb from "./config/ConnectDb.js";
import cors from "cors";
import InterestRouter from "./routes/Interest.routes.js";
import CourseRouter from "./routes/Course.routes.js";
import AdminRouter from "./routes/Admin.routes.js";
import PeerRouter from "./routes/PeerGroup.routes.js";
dotenv.config();
Connectdb();
const app = express();
app.use(cors({
  origin: "http://localhost:5173", // ✅ or "*" for public
  credentials: true // 🔥 If you're using cookies or sessions
}));
app.use(express.json());
app.use("/api/v1/user",UserRouter);
app.use("/api/v1/interest",InterestRouter);
app.use("/api/v1/course",CourseRouter);
app.use("/api/v1/admin",AdminRouter);
app.use("/api/v1/peer",PeerRouter);
app.listen(process.env.PORT,() => {console.log(`Server is Running on PORT ${process.env.PORT}`)})
