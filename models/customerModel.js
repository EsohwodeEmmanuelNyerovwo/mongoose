import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name:{type:"String",required:true},
    age:{type:"number",required:true,unique:true},
    favoriteFood: [String]
})

const customer = mongoose.model("customers",customerSchema);
export default customer