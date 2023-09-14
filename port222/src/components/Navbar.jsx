import { NavLink as Link } from 'react-router-dom'
import {RxHamburgerMenu}  from 'react-icons/rx'
import {RxCross1}  from "react-icons/rx"
import { useState } from 'react'



const Navbar = ({children}) => {

const [isOpen, setIsOpen] = useState(false)
const handleSetOpen = (prev)=>{
if(prev){
    return false
}
else{
    return true
}
}

  return (
    <>

    <nav className='flex justify-between items-center py-2 px-2 text-xl p-1 font-mono sticky bg-vesuvius-600 text-white'>

<div className="logo flex">
    <img src="/favicon.png" alt="logo" className='w-10' />
</div>

<div className="nav-link flex gap-3">

<ul className=' sm:hidden flex gap-3 font-poppins py-1'>

    <li>
        <Link to="/"  className={(isActive)=>{

return(
  isActive? ` text-orange-500`:'text-green-500'
)

        }}>Home </Link>
    </li>

    <li>
        <Link to="/work"  className='text-green-500 font-poppins hover:text-orange-500'>Work</Link>
    </li>

    <li>
        <Link to="/skills" className='text-green-500 font-poppins hover:text-orange-500' >Skills</Link>
    </li>


</ul>

<button className='hidden sm:contents' onClick={()=>{setIsOpen(handleSetOpen)}} > <RxHamburgerMenu className=' text-2xl'/> </button> 
</div>

    </nav>

{
!isOpen ? null :   


<div className=''>

<div className='w-screen h-screen bg-vesuvius-700 text-white text-center flex flex-col justify-center items-center  z-50 absolute top-0'>
 <button onClick={()=>{setIsOpen(false)}} className=' absolute top-0 right-0 m-4 ' ><RxCross1 className=' text-3xl text-white bg-red-500 m-1 rounded-full px-1 animate-bounce '/></button> 
 <ul className=' flex flex-col gap-3 bg-transparent text-2xl font-mono '>

<li className=''>
    <Link to="/"  onClick={()=>{setIsOpen(handleSetOpen)}} className=' text-transparent bg-clip-text  bg-gradient-to-b from-orange-200 to-orange-500'>Home</Link>
</li>

<li>
    <Link to="/work"  onClick={()=>{setIsOpen(handleSetOpen)}} className=' text-transparent bg-clip-text  bg-gradient-to-b from-orange-200 to-orange-500' >Work</Link>
</li>

<li>
    <Link to="/skills"  onClick={()=>{setIsOpen(handleSetOpen)}} className=' text-transparent bg-clip-text  bg-gradient-to-b from-orange-200 to-orange-500' >Skills</Link>
</li>


</ul>
</div>

</div>

}



    </>
  )
}
export default Navbar