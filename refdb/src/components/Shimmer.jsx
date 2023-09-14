

const Shimmer = () => {
  return (
 <div className="flex gap-4 flex-wrap  justify-center items-center py-4 ">
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>
 <ShimmerCard/>

 </div>
  )
}
export default Shimmer



const ShimmerCard = ()=>{
  return(

    <div className="rounded-lg animate-shimmer ">
  <div className="w-36 h-52 rounded-lg bg-primary-100" ></div>
    <div className="rating bg-primary-500  w-max rounded-full px-2.5 py-2 sticky top-0">
      <h1 className="text-primary-50"></h1>
    </div>
    <div className="content">
      <h1 className="font-semibold text-lg text-primary-950"></h1>
      <h1 className="text-grey " ></h1>
    </div>
        </div>

  )
}