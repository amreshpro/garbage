import {  useEffect, useState } from "react"

import CardContainer from "./CardContainer"

import Shimmer from './Shimmer'
import { fetchDataFromTMDBApi } from "../utils/api"
import useFetch from "../hooks/useFetch"
import MovieCard from "./MovieCard"




const Trending = () => {
const [isLoading, setIsLoading] = useState(false)
const [trending, setTrending] = useState([])


 const {fetchData,loading} = useFetch('/discover/movie?page=2')

useEffect(()=>{

setIsLoading(loading)

 console.log(fetchData)



setIsLoading(false)

})



return (
    <div>

<CardContainer>
{
  isLoading ? <Shimmer/> :<>
  
{
  trending.map((item)=>{
    return(
      <MovieCard  key={item.id} {...item} />
    )
  })
}
  </>




}


</CardContainer>


    </div>
  )
}
export default Trending