import connectDB from "./db.js";
import dotenv from "dotenv";
import Person from "./models/person.js";

dotenv.config();

const funcDB = async() =>{
    try {
        await connectDB();
        // await Person.create([
        //     {
        //         name:"Joseph Otes",
        //         age:26,
        //         favoriteFoods:["Rice","Burger"]
        //     },
        //     {
        //         name:"Moh kenneth",
        //         age:20,
        //         favoriteFoods:["pizza","pie"]
        //     }
        // ])
        // console.log("Items saved");
        // console.log(await findAll());
        // console.log(await findOne());
        // console.log(await findById());
        // console.log(await addToFavFoods());
        // console.log(await findOneAndUpdate());
        console.log(await findOneAndRemoveMethod());
    } catch (error) {
        console.log(error);
    }
}
const findOneAndRemoveMethod = async() =>{
    const userID = '67c714be7c26c4694fce9bc7';
    const rem =  await Person.findOneAndDelete({name:"Otes Otes"});
    return rem;
}
const findByIdAndRemoveMethod = async() =>{
    const userID = '67c714be7c26c4694fce9bc7';
    await Person.findByIdAndRemove(userID);
}
const findOneAndUpdate = async() =>{
    const a = await Person.findOneAndUpdate(
        {name:"Moh kenh"},
        {age:90},
        {new:true}
    )
    return a;
}
const findAll = () =>{
    return Person.find();
}
const findOne = () =>{
    return Person.findOne({name: 'Tessy MC'});
}
const findById = () =>{
    return Person.findById('67c5f1baaa63e719bbe869b3');
}
const addToFavFoods = async() =>{
    const toChange = await Person.findOne({name: 'Tessy MC'})
    if(toChange){
        toChange.favoriteFoods.push('Hamburger');
        await toChange.save()
        console.log(toChange);
        console.log("saved");
        
    }
    else{
        console.log('Error adding');
    }
    // return add;
}

funcDB();