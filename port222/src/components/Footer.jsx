import {FiLinkedin} from "react-icons/fi"
import { ImTwitter} from "react-icons/im"
import {BsInstagram,BsGithub} from "react-icons/bs"
import  links from "../constant/socialLinks"



const Footer = () => {
  return (
    <footer className="text-gray-600  flex flex-col flex-wrap items-center justify-center gap-4 pb-2  bg-gradient-to-r from-rose-800 to-purple-800">
   
  
    <div className="logo bg-transparent pt-8">

    <a className=" title-font font-medium items-center flex md:justify-start justify-center text-gray-900  bg-transparent ">
      <img src="/code01.png" alt="logo" className="w-16 bg-rose-500   rounded-full" />

          <span className=" m-3 text-xl font-mono bg-gradient-to-r from-amber-200 to-cyan-200 text-transparent bg-clip-text ">amreshpro</span>
        </a>
    </div>

        <div className="copy bg-transparent mt-1 text-center sm:mb-8">
            <p className="text-lg text-gray-400  font-lilita bg-gradient-to-r from-cyan-300 to-lime-400 text-transparent bg-clip-text ">© 2023 — Amresh Maurya
          <a  rel="noopener noreferrer" className="text-gray-400 ml-1 bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text " target="_blank">@amreshpro</a>
        </p>
        </div>


        <div className="  flex gap-2 justify-center items-center bg-transparent w-full">
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


  </footer>
  )
}
export default Footer