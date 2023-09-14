import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import { DBConnect } from "./db/DBConnect.js";
import router from "./routes/UserRoutes.js";

// load environment variable
dotenv.config()

// app
const app = express();

// connecting to database

DBConnect(process.env.MONGODB_URL,{
    dbName:"Users",

})


// cors policy
app.use(cors())

// urlencoded
app.use(express.urlencoded({extended:true}))

// json parser
app.use(express.json())

// use user router
app.use(router)



app.get("/",(req,res)=>{
    res.json({"status":"success"})
})





const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})