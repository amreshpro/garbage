import Hashtag from "./mini/Hashtag"



const ProjectCard = ({name,description,hastag ,img,link,live}) => {



  return (
<div className="w-80  rounded-lg overflow-hidden shadow-lg bg-card  gap-8 m-2 flex flex-col flex-wrap xsm:w-auto">
<div className="img-container  ">  <img className="w-full h-56 object-fill" src={`${img}`} alt="project image"/></div>
<div className="text-container bg-card pt-2">
<div className="pl-2 bg-card mt-1 pb-5 flex flex-col gap-4">
 <h1 className="text-3xl bg-card uppercase font-lilita bg-gradient-to-r from-orange-300 to-pink-400 text-transparent bg-clip-text ">{name}</h1>
    <p className="text-gray-300 text-xs bg-card  tracking-widest leading-6 font-poppins">
     {description}
    </p>

    <div className="btn bg-transparent gap-4 flex  justify-start">
      <a href={link} className="text-white   bg-gradient-to-r from-orange-300 to-pink-400  px-2 p-1 text-xl rounded-lg">Code</a>
      <a href={live} className="text-white   bg-gradient-to-r from-orange-300 to-pink-400  px-2 p-1 text-xl rounded-lg">Live</a>
    </div>
  </div>
  <div className="pb-5 pt-8 pl-2 flex gap-2 bg-card flex-wrap ">
{

  hastag.map((item,index)=>{
    return <Hashtag key={index} color={item.color} title={item.title} textColor={item.textColor}/>
  })
}

  </div>

</div>
</div>
  )
}
export default ProjectCard