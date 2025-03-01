import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"learnDB"
        })
        console.log('connected');
    } catch (error) {
        console.error('Error connecting to mongoDB',error.message)
    }
}
export default connectDB;