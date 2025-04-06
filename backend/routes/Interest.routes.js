import express from "express";
import { AddBulkInterest, CreateInterest } from "../controllers/Interest.controllers.js";

const InterestRouter = express.Router();

InterestRouter.post("/create",CreateInterest);
InterestRouter.post("/bulk",AddBulkInterest);

export default InterestRouter;
