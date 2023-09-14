import {useState} from 'react'
import {LuMenu} from 'react-icons/lu'
import {VscChromeClose} from 'react-icons/vsc'
import {BsMoonStarsFill} from 'react-icons/bs'
import {LuSunMoon} from 'react-icons/lu'
import { motion } from 'framer-motion'
import {Link,} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { isDarkModeEnabled } from '../store/darkModeSlice'
import { isAuth } from '../store/authSlice'







const Navbar = () => {

     const [isMenuOpen, setIsMenuOpenOpen] = useState(false)
     const [isDarkMode, setIsDarkMode] = useState(false)

const dispatch = useDispatch()
// const isAuthenticated = useSelector((state)=>state.auth)

const logoutHandler=()=>{

dispatch(isAuth(false))

}

    
const isDarkModeTrue = useSelector((state)=>state.darkMode)


     const toggleDarkModeHandler = ()=>{
     
     dispatch(isDarkModeEnabled())

     setIsDarkMode((prev)=>{
       return prev ?false:true
     })
     
  
     }

  return (
 <div className={` ${isDarkModeTrue ?  'bg-blue-950': 'bg-sky-400' } `}>
    

    <nav className={` ${isDarkModeTrue ?  'bg-blue-950  text-sky-400': 'bg-sky-400 text-blue-950' } shadow-sm  flex justify-between px-2 py-4 `}>
<div className="logo flex gap-2 ">


<motion.div animate={{rotate:360}}>

<img src="/favicon.png" alt="logo"  className="w-10 animate-waving-hand" />

</motion.div>
<h1 className="text-sky-800 text-2xl font-nunito font-bold ">HireShyre</h1>
<button onClick={toggleDarkModeHandler} >{isDarkMode ? <LuSunMoon className="mb-4 text-3xl font-bold  text-orange-300" /> : <BsMoonStarsFill className={`text-2xl mt-0.5 ml-1 font-bold  mb-4  ${isDarkModeTrue ?  'text-blue-950': 'bg-sky-400' }`}/>}</button>
</div>




<ul className="flex flex-row gap-4 pt-2 pr-2 sm:hidden text-lg font-nunito font-bold">
<li><Link to="/jobs">For Job Seekers</Link></li>
  <li><Link to="/company">For Companies</Link></li>
  <li><Link to="/profile">Profile</Link></li>
  <li><button onClick={logoutHandler} >Logout</button></li>
    


</ul>



    </nav>



    <div  onClick={()=>setIsMenuOpenOpen((prev)=>{

  return prev===true ?false :true;
})}> { isMenuOpen ? <VscChromeClose className="mt-5 mr-5 text-sky-800 text-2xl absolute top-0 right-1 invisible sm:visible" /> :<LuMenu className="mt-5 mr-5   text-3xl absolute top-0 right-1 invisible text-sky-800 sm:visible"/>}</div>



{
  isMenuOpen  &&
  <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
  
  <ul className={`   ${isDarkModeTrue ?  'text-violet-400': 'text-sky-800' } font-nunito font-bold justify-center px-4 flex flex-col gap-4 pt-1 pb-4 pr-2 ease-linear duration-1000`}>
  <li><Link to="/jobs">For Job Seekers</Link></li>
  <li><Link to="/company">For Companies</Link></li>
  <li><Link to="/profile">Profile</Link></li>
  <li><button onClick={logoutHandler} >Logout</button></li>




  


</ul>

</motion.div>

}
    </div>
  )
}
export default Navbar