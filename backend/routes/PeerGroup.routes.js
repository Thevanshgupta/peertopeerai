import express from "express";
import { CalculatePeer } from "../controllers/PeerGroup.controller.js";

const PeerRouter = express.Router();

PeerRouter.post("/generate",CalculatePeer);

export default PeerRouter;
