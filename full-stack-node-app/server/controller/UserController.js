import UserModel from "../model/UserModel.js";
import bcrypt from "bcrypt";

class UserController {

  // signup or register logic
  static UserRegistration = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const isExist = await UserModel.find({ email });
      console.log(`isExisted:${isExist}`);
      if (isExist == "" || isExist == null || isExist == undefined) {
        const salt = 8;
        const hashPassword = await bcrypt.hash(password, salt);

        const userDetails = {
          name,
          email,
          password: hashPassword,
        };
        const registerDocument = await new UserModel(userDetails);
        registerDocument.save();
        res.send("Registration Successfull");
      } else {
        console.log("this email is already registered");
        res.status(406).end("This Email already registred");
      }
    } catch (err) {
      console.log(`signup error:${err}`);
    }
  };


  // login logic
  static UserLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const searchResult = await UserModel.find({ email });
      const hashArr = [...searchResult];

      const matchResult = await bcrypt.compare(password, hashArr[0].password);
      // console.log(matchResult)

      if (matchResult) {
        res.end("Login Successful");
      } else {
        res.end("login failed");
      }
    } catch (err) {
      console.log(`error :${err}`);
    }
  };


//   get all user
static getAllUser = async(req,res)=>{

try{

// fetch data from database
const allUserDetail = await UserModel.find({});
console.log(allUserDetail)
res.json(allUserDetail)


}
catch(err){
    console.log(err)
    res.end(`can't get data `)
}

}





}

export default UserController;
