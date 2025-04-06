
import mongoose from 'mongoose'

const peerGroupSchema = new mongoose.Schema({
  course: { type: String, required: true },
  userA: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userB: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  gap: { type: Number, required: true }
},{versionKey:false});

const PeerGroup = mongoose.model("PeerGroup", peerGroupSchema);

export default PeerGroup;
