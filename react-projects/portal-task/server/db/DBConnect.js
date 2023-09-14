import mongoose from "mongoose";


export const DBConnect =async(db_url,db_config)=>{

    try {
        
await mongoose.connect(db_url,db_config).then((res)=>{
    
console.log("DB connected Succesfully")

})

    } catch (error) {
        console.log(error)
    }

}

