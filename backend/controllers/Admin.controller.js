import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcrypt"
import User from "../models/User.js"
const Register = async (req,res) => {
try {
  const {email,password} = req.body;
  if(!email || !password) return res.status(400).json(new ApiResponse(false,"Email and Password are required"));
  const existingAdmin = await Admin.findOne({email:email});
  if(existingAdmin) return res.status(400).json(new ApiResponse(false,"Admin already exists"));
  const hashedpassword = await bcrypt.hash(password,10);
  await Admin.create({email:email,password:hashedpassword});
  res.status(201).json(new ApiResponse(true,"Admin Registered Successfully"));
} catch (error) {
  res.status(500).json(new ApiError(false,error.message));
}
}
const Login = async (req,res) => {
try {
  const {email,password} = req.body;
  if(!email || !password) return res.status(400).json(new ApiResponse(false,"Email and Password are required"));
  const existingAdmin = await Admin.findOne({email:email});
  if(!existingAdmin) return res.status(400).json(new ApiResponse(false,"Admin already exists"));
  const ismatched = await bcrypt.compare(password,existingAdmin.password);
  if(!ismatched) return res.status(401).json(new ApiResponse(false,"Invalid credentials"));
  res.status(200).json(new ApiResponse(true,"Admin Login Successfully"));
} catch (error) {
  res.status(500).json(new ApiError(false,error.message));
}
}
const GetAllUsers = async (req,res) => {
try {
  const data = await User.find({});
  res.status(200).json(new ApiResponse(true,data));
} catch (error) {
  res.status(500).json(new ApiError(false,error.message));
}
}

export {Register,Login,GetAllUsers};
