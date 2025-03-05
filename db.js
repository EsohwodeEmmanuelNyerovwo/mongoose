import mongoose from "mongoose"

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"mongooseTest"
        });
        console.log('connected');
    } catch (error) {
        console.log('Failed to connect',error);
    }
}

export default connectDB;