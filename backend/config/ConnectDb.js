import mongoose from "mongoose";

const ConnectDb = () => {
  mongoose.connect(process.env.MONGO_URI,{dbName:"StudentManagement"}).then(() => {console.log("Database Connected")}).catch((error) => {console.log(error)});
}

export default ConnectDb;
