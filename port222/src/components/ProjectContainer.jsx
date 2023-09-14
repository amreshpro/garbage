import ProjectCard from "./ProjectCard";
import project from "../constant/project"
import { motion } from "framer-motion"

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


const ProjectContainer = () => {
  return (
    <motion.div className=" container flex flex-wrap justify-center items-center gap-8"
    variants={container}
    initial="hidden"
    animate="visible"
    
    >

{

project.map((item,index)=>{
return(

<motion.div key={index}
className="item" variants={itemAnime} 
>

<ProjectCard name={item.name} description={item.description} hastag={item.hastag} img={item.img}  link={item.link} live={item.live}/>


</motion.div>


)

})

}


    </motion.div>
  )
}
export default ProjectContainer