"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const LoginPage = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
    
    });

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(()=>{
if(user.email.length>3 && user.password.length>3){
    setButtonDisabled(false)
}else{
    setButtonDisabled(true)
}
    },[user])

    const onLogin = async () => { 

try {
    
    const response =await axios.post("/api/users/login",user);
console.log("Login Success",response.data)
toast.success("Login Success")
router.push("/profile");


} catch (error:any) {
    console.log("Login Failed",error.message)
}

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="my-4 text-xl">Login</h1>
            <hr />
           

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }}
                placeholder="email"
                className="p-2"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}
                placeholder="password"
                className="p-2"
            />
            <br />
            <button
                type="submit"
                className="bg-blue-500 text-white px-2 py-2 rounded-lg "
                onClick={onLogin}
            >
                {buttonDisabled ? "disabled Login":"Login"}
            </button>

            <Link href="/signup">Visit signup Page</Link>
        </div>
    );
};
export default LoginPage;
