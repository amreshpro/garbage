"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const SignupPage = () => {

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const onSignup = async () => {
try {
  
const response = await axios.post("/api/users/signup",user)
console.log("signup success",response)
router.push("/login")

} catch (error) {
  console.log("Signup failed")
}
   
  };


  useEffect(()=>{
if(user.email.length>6 && user.username.length>3 && user.password.length>3){
  setButtonDisabled(false)
}
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="my-4 text-xl">Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="username"
        className="p-2"
      />

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
        onClick={onSignup}
      >
    {buttonDisabled ? "No signup":"Signup"}
      </button>

      <Link href="/login">Visit login Page</Link>
    </div>
  );
};
export default SignupPage;
