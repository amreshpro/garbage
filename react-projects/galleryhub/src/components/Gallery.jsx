import { useEffect, useState } from "react"
import { useGlobalContext } from "../context"
import LoadingSpin from "./LoadingSpin"





const Gallery = () => {

const {fetchResult,isLoading} = useGlobalContext()

if(isLoading) return <LoadingSpin/>

  return (
    <section className=" mb-4 w-screen h-full flex flex-wrap gap-4 justify-center items-center">

{
  fetchResult?.map((item)=>{
    return(
      <div className="" key={item.id}>
      <a href={item.urls.regular}> 
            <img src={item.urls.full} className="w-72 h-72" alt="" />
            </a>
      </div>
    )
  })
}
    </section>
  )
}
export default Gallery