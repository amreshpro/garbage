"use client";


import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
const router = useRouter()
  const logout = async()=>{
try {
  

await axios.get("/api/users/logout")
toast.success("Logout Successful")
router.push("/login")
} catch (error:any) {
  console.log(error.message)
  toast.error(error.message)
  
}
  }

  return (
    <div>

<h1 className="text-blue-400">Profile PAge</h1>

<button
onClick={logout}
className="bg-violet-500 text-white px-2 py-2 rounded-lg ">Logout</button>
    </div>
  )
}


export default ProfilePage