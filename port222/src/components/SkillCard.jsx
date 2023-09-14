
const SkillCard = ({img,name}) => {
  return (
    <>
   


      
          <div className="w-80  rounded-lg    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  overflow-hidden shadow-lg bg-card  gap-8 m-2 p-1 flex flex-col flex-wrap xsm:w-auto">
          <div className="img-container  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
          
            <img
              src={`${img}`}
              alt="project image"

              className="w-full h-56 object-fill rounded-lg  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  "
            />
          </div>
          <div className="text-container bg-card pt-2 rounded-lg">
            <div className="pl-2 bg-card mt-4 pb-5 flex flex-col rounded-lg   items-center gap-4">
              <h1 className=" text-3xl bg-card uppercase font-lilita   bg-gradient-to-r from-amber-300 to-cyan-400 text-transparent bg-clip-text">
                {name}
              </h1>
            </div>
          </div>
        </div>
        

   
     
    </>
  );
};
export default SkillCard;
