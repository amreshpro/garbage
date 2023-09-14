import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!,{
            dbName:"User"
        });
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log(`MongoDB connected successfully`)
        })
    } catch (error) {
        console.log(error)
        console.log("database related error")
    }



}