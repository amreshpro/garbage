import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'


export default function Signup() {

  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const [emptyFieldMessage, setEmptyFieldMessage] = useState("")
const [matchPassword, setMatchPassword] = useState("")





const onSubmitHandler = async(e)=>{
  e.preventDefault()
 


if(name.length>=4 && email.length>=8 && password.length>=4 && confirmPassword.length>=4)
{

if(confirmPassword===password){
  // password match
  setMatchPassword("")



  try{


// form data store in register object
    const register = {
      name,
      email,
      password,
      confirmPassword
    }
    // resetForm
    resetForm()

    const result = await axios.post("http://localhost:7000/user/register",register).then((response)=>{
    console.log(response)  
    return response
    }).catch(err=>{
      console.log(err)
    })
  
  console.log(result)
  console.log(register)
  
  }
  catch(err){
  console.log(`axios error: ${err}`)
  }


}
else{
  console.log("password and confirm password is not matched")
setMatchPassword("Password and confirm-password must be same")
}
 }
else{
  console.log("error: file all detail completly")
  setEmptyFieldMessage("Field can not be empty or short in length")
}



}

const resetForm = ()=>{
  setConfirmPassword("")
  setEmail("")
  setPassword("")
  setName("")
  setMatchPassword("")
  setEmptyFieldMessage("")
}

    return (
      <>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    value={name}
             onChange={e=>setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-500">{name.length==0 ?emptyFieldMessage:""}</p>
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
                    value={email}
             onChange={e=>setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-500">{email.length==0 ? emptyFieldMessage:""}</p>

                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-500">{password.length==0 ? emptyFieldMessage:""}</p>

                  <p className='text-red-500 py-1'>{matchPassword}</p>
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                   Confirm Password
                  </label>
              
                           
                </div>
                <div className="mt-2">
                  <input
                    id="confirm_password"
                    name="password"
                    type="password"
                    value={confirmPassword}
     onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-500">{confirmPassword.length==0 ? emptyFieldMessage :  ""}</p>

                  <p className='text-red-500 py-1'>{matchPassword}</p>

                </div>
              </div>
  

              <div>
                <button
                  type="submit"
                  
                  onClick={onSubmitHandler}

                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create
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
      </>
    )
  }