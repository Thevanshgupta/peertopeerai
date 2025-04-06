import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Interest from "../models/Interest.js";

const CreateInterest = async (req,res) => {
try {
   const {name,description} = req.body;
   if(!name || !description) return res.status(400).json(new ApiResponse(false,"Name and Description is Required"));
   const existinginterest = await Interest.findOne({name:name});
   if(existinginterest) return res.status(400).json(new ApiResponse(false,"Interest already exists"));
   await Interest.create({name:name,description:description});
   res.status(201).json(new ApiResponse(true,"Interest Created Successfully"));
} catch (error) {
   res.status(500).json(new ApiError(false,error.message));
}
}
const AddBulkInterest = async (req,res) => {
try {
   const {name,description} = req.body;
   if(!name || !description) return res.status(400).json(new ApiResponse(false,"Name and Description is Required"));
   const data = [];
   for(let i=0;i<name.length;i++)
   {
     const stdata = {name:name[i],description:description[i]};
     data.push(stdata);
   }
   await Interest.insertMany(data);
   res.status(200).json(new ApiResponse(true,"Interest Added Successfully"));
} catch (error) {
   res.status(500).json(new ApiError(false,error.message));

}
}

export {CreateInterest,AddBulkInterest}
