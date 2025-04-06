import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const Register = async (req,res) => {
 try {
 const {name,email,password} = req.body; 
 if(!email||!password) return res.status(400).json(new ApiResponse(false,"Email and Password is Required"));
 const existinguser = await User.findOne({email:email}); 
 if(existinguser) return res.status(400).json(new ApiResponse(false,"Email already exists"));
  const hashedpassword = await bcrypt.hash(password,10);
  await User.create({name:name,email:email, password:hashedpassword});
  res.status(201).json(new ApiResponse(true,"User Registered Successfully"));
 } catch (error) {
   res.status(500).json(new ApiError(false,error.message));	
 }
}

const Login = async (req,res) => {
 try {
   const {email,password} = req.body;
   if(!email||!password) return res.status(400).json(new ApiResponse(false,"Email and Password is Required"));
   const existinguser = await User.findOne({email:email}); 
   if(!existinguser) return res.status(400).json(new ApiResponse(false,"User Not Found"));
   const ismatched = await bcrypt.compare(password,existinguser.password);
   if(!ismatched) return res.status(400).json(new ApiResponse(false,"Invalid Password"));
   const token = jwt.sign({id:existinguser._id},process.env.JWT_SECRET,{expiresIn:"24h"});
   res.status(200).json(new ApiResponse(true,token));
 } catch (error) {
   res.status(500).json(new ApiError(false,error.message));	
 }
}

const EditUser = async (req,res) => {
try {
  const id = req.user.id;
  const {studytime,studymethod,groupsize} = req.body;
  const user = await User.findById(id);
  user.studytime = studytime;
  user.studymethod = studymethod;
  user.groupsize = groupsize;
  await user.save();
  res.status(200).json(new ApiResponse(true,"Edited Sucessfully"));
} catch (error) {
   res.status(500).json(new ApiError(false,error.message));	

}
}
const AddKnowledge = async (req,res) => {

const { email, title, knowledgebase } = req.body;

const user = await User.findOne({ email });

if (!user) {
  return res.status(404).json({ status: false, message: 'User not found' });
}

if (title.length !== knowledgebase.length) {
  return res.status(400).json({ status: false, message: 'Title and knowledgebase must match in length' });
}

const result = [];
for (let i = 0; i < title.length; i++) {
  result.push({ title: title[i], knowledgebase: knowledgebase[i] });
}

user.knowledge.push(...result); // spread the array
await user.save();

res.status(200).json(new ApiResponse(true, "Added Knowledge Successfully"));

}

export {Register,Login,EditUser,AddKnowledge};
