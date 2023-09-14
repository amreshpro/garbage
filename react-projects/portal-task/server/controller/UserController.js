
import UserModel from "../model/UserModel.js"
import bcrypt from 'bcryptjs'



class UserController {

    // signup method
static async SignupController(req,res){
const {name,email,password} = req.body;


// check is it empty or not
if(name.length>3 && email.length>7 && password.length>3){

    //check is it registred or not
const isExisted = await UserModel.findOne({email})

const salt = await bcrypt.genSalt(10)
const hash =await bcrypt.hash(password,salt)
// if not found
if(!isExisted){
    const doc = new UserModel({name,email,password:hash})
   
    doc.save().then(()=>{
        console.log("saved successfully in database")
    })

    res.json({"message":"Details saved in databse sucessfully"})



}else{

    res.status(406).json({"error":"this email alreday registred"})
}


}

else{
    res.status(404).json({"error":"Details can't be empty or short in length."})
}



}


// login method
static async LoginController(req,res){
    const {email,password} = req.body;

// chech is exist in our database or not
const isExisted = await UserModel.findOne({email})
if(isExisted){


// check password is correct or not
const isPasswordCorrect  = await bcrypt.compare(password,isExisted.password) 

// if passoword true
if(isPasswordCorrect){

res.json({"message":"You are succesfully login"})

}else{
    res.status(406).json({"error":"password is incorrect"})
}


}else{
    res.status(406).json({"error":"User not registred in our database"})
}

}










// get all user
static async AllUserData(req,res){

    // get all data
   const user = await UserModel.find()
res.json(user)

}



// test method
static test(req,res){
    console.log(req.body)
    console.log("Hello")
    res.json({"hello":"it works"})
}





}


export default UserController