import  express  from "express";
import cors from 'cors'
import * as dotenv from "dotenv";
import UserRouter from "./routes/UserRoutes.js";
import connectDB from "./db/connectDB.js";

// load environment variable
dotenv.config()


// express app
const app = express()

// use json
app.use(express.json())
// cors policy
app.use(cors())

// bodyparser
app.use(express.urlencoded({extended:true}))

// use route
app.use("/user",UserRouter)


// connecting database

connectDB(process.env.MONGO_DB_URL,{  useNewUrlParser: "true",
useUnifiedTopology: "true",
dbName:"Users"
})



// our app routes
app.get("/",(req,res)=>{

    res.send({"default":"default response page created by amresh"})
})



const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})