import mongoose from 'mongoose'


const connectDB = async(url,options)=>{

    try
    {
  await mongoose.connect(url,options)
  

console.log('Database connected successfully')

}
catch(err){
    console.log(`error in database connection:${err}`)
}
}


export default connectDB