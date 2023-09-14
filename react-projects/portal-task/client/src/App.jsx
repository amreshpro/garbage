import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AuthWrapper from "./pages/AuthWrapper"
import Home from "./components/Home"
import Login from "./User/Login"
import Signup from "./User/Signup"
import Error from './components/Error'
import Navbar from "./pages/Navbar"
import Profile from "./pages/Profile"
import JobSeekers from "./pages/JobSeekers"
import ForCompanies from "./pages/ForCompanies"




const router= createBrowserRouter([
{
  path:"/",
  element:(
    <AuthWrapper>
      <Navbar/>
      <Home/>
    </AuthWrapper>
  )
},


{
  path:"/profile",
  element:(
    <AuthWrapper>
      <Navbar/>
      <Profile/>
    </AuthWrapper>
  )
},


{
  path:"/jobs",
  element:(
    <AuthWrapper>
      <Navbar/>
      <JobSeekers/>
    </AuthWrapper>
  )
},


{
  path:"/company",
  element:(
    <AuthWrapper>
      <Navbar/>
      <ForCompanies/>
    </AuthWrapper>
  )
},

{

  path:"/login",
  element:(
    <Login/>
  )
},



{
  path:"/signup",
  element: <Signup/>
},
{
  path:"*",
  element:<Error/>
}

])









const App = () => {
  return (
    <div>

<RouterProvider router={router} />

    </div>
  )
}
export default App