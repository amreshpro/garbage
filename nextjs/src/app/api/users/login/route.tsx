

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        // destructure value
        const {  email, password } = reqBody

        console.log(reqBody)

        // chech if user already exist
        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "User Not Registred in our site" }, { status: 400 })
        }else{
             const tokenData = {id:user._id,
            username:user.username,
        email:user.email}

        // create token
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response = NextResponse.json({message:"Login successful",sucess:true})
            // verify password
            const isPasswordVerified = await bcryptjs.compare(password,user.password)

response.cookies.set("token",token,{httpOnly:true,
    path:"/"}
    )



    return response

        }


    



    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}