import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const AuthWrapper = ({children}) => {


const isAuthenticated = useSelector((state)=>state.auth)
console.log(isAuthenticated)


  return (
    <>
    {
        isAuthenticated ? children : <Navigate to="/login" replace={true}/>
    }
    
    
    </>
  )
}
export default AuthWrapper