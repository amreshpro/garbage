import skills from "../constant/skills";

import { motion } from "framer-motion"
import SkillCard from "./SkillCard";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemAnime = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



const SkilLContainer = () => {
  return (
    <motion.div className=" container flex flex-wrap justify-center items-center gap-8"
    variants={container}
    initial="hidden"
    animate="visible"
    
    >

{

skills.map((item,index)=>{
return(

<motion.div key={index}
className="item" variants={itemAnime} 
>

<SkillCard img={item.img} name={item.name}/>

</motion.div>


)

})

}


    </motion.div>
  )
}
export default SkilLContainer