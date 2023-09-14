import { Link, Navigate } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { isAuth } from "../store/authSlice";
import { useState } from "react";
import { userProfileDetail } from "../store/userSlice";
import axios from 'axios'





const Signup = () => {

const [user, setUser] = useState({
  name:"",
  email:"",
  password:"",
})


const [ errorMessage, setErrorMessage] = useState({
  email:"",
  password:""
})



  const isAuthenticated = useSelector((state)=>state.auth)
const dispatch = useDispatch()

async function submitSignupFormHandler(e){
  e.preventDefault();

  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

if(regex.test(user.email) && user.password){


  
 await axios.post("http://localhost:5050/user/signup",user).then((res)=>{

console.log(res)
if(res.status === 200){

  dispatch(isAuth(true))
  dispatch(userProfileDetail(user))
}
   }).catch(()=>{
    setErrorMessage((prev)=>{
      return {...prev , email:"Email is already exist."}
    })
    console.log("user already exist")
   })
  
  






}


}



  return (
    <>
{ isAuthenticated ? <Navigate to="/" replace={true} /> :  <div className="flex justify-center items-center w-screen">
    

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto  sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create a new account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center ">
              <form className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your username"
                      required
                      onChange={(e)=>{setUser({...user,name:e.target.value})}}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Enter your email..."
                      onChange={(e)=>{setUser({...user,email:e.target.value})}}
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <p className="text-red-500">{errorMessage.email}</p>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    {/* <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div> */}
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="Enter your password..."
                      onChange={(e)=>{setUser({...user,password:e.target.value})}}
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 onClick={submitSignupFormHandler}
                 >
                    Sign In
                  </button>
                </div>
              </form>
    
              <p className="mt-10 text-center text-sm text-gray-500">
                Already a member?{' '}
                <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
    
    
        </div>




}
    </>
  )
}
export default Signup


