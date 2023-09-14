import { Link } from "react-router-dom"
import {AiOutlineInstagram} from 'react-icons/ai'
import { BsFacebook,BsLinkedin, BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className="bg-primary-950 flex flex-col justify-center items-center text-primary-50  py-4">
      <nav className="flex gap-4 justify-center items-center py-4 font-semibold">
      <Link to="/"> Terms of Use </Link>
         <Link to="/"> Privacy Policy </Link>
        <Link to="/"> About</Link>
        <Link to="/"> Blog</Link>
        <Link to="/">FAQ </Link>



      </nav>
<div className="para text-primary-300 w-fit px-4">
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio?
     Ipsam, voluptas. Pariatur reiciendis, velit voluptas assumenda cum repellendus dolor aut aliquid!</p>
</div>
   
   <div className="social-linkc flex gap-4 items-center justify-center py-4" >
    <Link to="" >  <BsFacebook  className="text-4xl bg-primary-50 text-primary-500 rounded-full p-1"/> </Link>
    <Link to="">  <AiOutlineInstagram  className="text-4xl bg-primary-50 text-primary-500 rounded-full p-1"  /> </Link>
    <Link to="">  <BsTwitter   className="text-4xl bg-primary-50 text-primary-500 rounded-full p-1" /> </Link>
    <Link to="">  <BsLinkedin  className="text-4xl bg-primary-50 text-primary-500 rounded-full p-1"  /> </Link>



   </div>
   
     </div>
  )
}
export default Footer