import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



const Home = () => {

  const isDarkModeTrue = useSelector((state)=>state.darkMode)



  return (<>

    <div className={`${isDarkModeTrue ? 'bg-blue-900 text-gray-200':'bg-blue-600 text-white' }  pt-5 p-2 h-[100vh] w-[100vw]  flex flex-col gap-2`} >


<h1 className="year text-xl">It's 2023</h1>
<h1 className="text-6xl font-bold sm:text-3xl">Top developers are NOT on typical job boards</h1>
<p>You need a new way to hire them. Without offering BMWs.
</p>
<br />

<Link to="" className="text-xl px-6 py-4 rounded-3xl border-2 border-white mt-4 mb-4 w-max">Apply now</Link>
    </div>
  </>
  )
}
export default Home