import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl text-red-500 text-center m-2">Page Not Found</h1>
        <Link to="/" className="bg-red-500 text-white px-2 py-1 rounded-lg" >Back to Home </Link>
    </div>
  )
}
export default Error