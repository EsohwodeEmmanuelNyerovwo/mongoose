import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    email:String,
    favoriteFoods:[String]
})

const Person = mongoose.model("person",personSchema);

export default Person;