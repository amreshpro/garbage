import { useState } from "react";
import {CgMenuRight,CgProfile } from 'react-icons/cg'
import {BsSearch} from 'react-icons/bs'

import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import navbar from "../constant/navbar";





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpenOpen] = useState(false);



  

  return (
    <div className={`  font-semibold w-screen sticky  sm:shadow-lg bg-primary-950 text-primary-50 "`}>
      <nav
        className={`   shadow-sm flex justify-between px-2 py-4  w-screen`}
      >
        <div className="logo  ">
  
        <Link to="/">    <img
              src="/favicon.avif"
              alt="logo"
              className="w-10 rounded-full"
            /></Link>
     
        </div>


<div className="link flex justify-between gap-4  h-full">


     <ul className="flex flex-row justify-between mx-2 items-center w-full h-full gap-4 pt-2 pr-2 sm:hidden text-sm   ">
      
 
      
      {
        
        navbar.map((item)=>{
          return (
            <li key={item.id}>   <Link to={`${item.route}`} className="flex justify-center items-center gap-1 text-lg"> {item.title} </Link> </li>
            )
})
}
          
<li>   <Link to="" className="flex justify-center items-center gap-1"> <BsSearch className="text-xl" /></Link> </li>
<li>   <Link to="" className="flex justify-center items-center gap-1"> <CgProfile className="text-xl"/> </Link> </li>


      </ul>
   

        



        </div>


      </nav>

      <div
        onClick={() =>
          setIsMenuOpenOpen((prev) => {
            return prev === true ? false : true;
          })
        }
      >
        {" "}
        {isMenuOpen ? (
          <VscChromeClose className="mt-5 mr-5 text-ternary text-4xl absolute top-0 right-1 invisible sm:visible" />
        ) : (
          <CgMenuRight className="mt-5 mr-5   text-4xl absolute top-0 right-1 invisible text-ternary sm:visible" />
        )}
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}

     
        >
          <ul
            className={`h-screen w-full  flex flex-col  justify-start  items-center gap-4  ease-linear duration-1000`}
          >
          

<div className="list flex flex-col justify-center items-start gap-4 mt-8"> 
{
        
        navbar.map((item)=>{
          return (
            <li key={item.id}>   <Link to={`${item.route}`}  onClick={() =>
              setIsMenuOpenOpen((prev) => {
                return prev === true ? false : true;
              })
            } className="flex justify-center items-center text-2xl gap-1"> {item.title} </Link> </li>
            )
})
}
   
{/* <li>   <Link to="" className="flex justify-center items-center gap-1"> <BsSearch className="text-xl" /></Link> </li>
<li>   <Link to="" className="flex justify-center items-center gap-1"> <CgProfile className="text-xl"/> </Link> </li> */}

    </div>
  
         </ul>
        </motion.div>
      )}
    </div>
  );
};
export default Navbar;