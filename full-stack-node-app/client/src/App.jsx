
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Login from './components/register/Login'
import Signup from './components/register/Signup'



const router = createBrowserRouter([
  {
    path: "/",
    element: (<><h1>Hello</h1></>),
  },
  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

]);



const App = () => {
  return (
    <div>

      <RouterProvider router={router}/>

    </div>
  )
}
export default App