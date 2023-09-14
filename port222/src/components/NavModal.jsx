import { motion } from "framer-motion";
import {FiLinkedin} from "react-icons/fi"
import { ImTwitter} from "react-icons/im"
import {BsInstagram,BsGithub} from "react-icons/bs"
import  links from "../constant/socialLinks"




const NavModal = () => {
  return (

    <motion.div
    
    initial={{ '--rotate': '180deg' } }
    animate={{ '--rotate': '360deg' } }
    transition={{ duration: 1,  }}
    >

        <NavbarModalCard/>

    </motion.div>
  );
};
export default NavModal;


const NavbarModalCard = ()=>{

    return(
        <div style={{transform:'rotate(var(--rotate))'}}  className="w-80 rounded-lg  overflow-hidden shadow-lg bg-card  gap-8 m-2 flex flex-col flex-wrap xsm:w-auto absolute  right-0">

<div className="  flex gap-2 justify-center items-center   bg-gradient-to-r from-rose-900 to-cyan-800  bg-transparent w-full py-1 ">
          <a className="text-gray-500 bg-transparent " href={links.linkedin}>
         <FiLinkedin className="text-4xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-1" />
          </a>
          <a className="ml-3 text-gray-500 text-2xl bg-transparent " href={links.github}>
          <BsGithub className="text-4xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full p-1" />
          </a>
          <a className="ml-3 text-gray-500 text-2xl bg-transparent"  href={links.instagram}>
         <BsInstagram  className="text-4xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full px-1 py-1 p-0.5"/>
          </a>
          <a className="ml-3 text-gray-500 text-2xl bg-transparent" href={links.twitter}>
            <ImTwitter  className="text-4xl bg-gradient-to-r from-pink-500 to-blue-500 rounded-full p-1"/>
          </a>
        </div>
  
      </div>
    )
}