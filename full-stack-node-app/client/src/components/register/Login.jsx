import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'


export default function Signup() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const [emptyFieldMessage, setEmptyFieldMessage] = useState("")






const onSubmitHandler = async(e)=>{
  e.preventDefault()
 


if( email.length>=8 && password.length>=4 )
{





  try{


// form data store in register object
    const register = {
          email,
      password,
      
    }

    // resetForm
    resetForm()

    const result = await axios.post("http://localhost:7000/user/login",register).then((response)=>{

    return response
    }).catch(err=>{
      console.log(err)
    })
  
  console.log(result)

  
  }
  catch(err){
  console.log(`axios error: ${err}`)
  }


}

else{
  console.log("error: file all detail completly")
  setEmptyFieldMessage("Field can not be empty or short in length")

}



}

const resetForm = ()=>{

  setEmail("")
  setPassword("")

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
              Login your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">

        

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

           
                </div>
              </div>
  
            

              <div>
                <button
                  type="submit"
                  
                  onClick={onSubmitHandler}

                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }