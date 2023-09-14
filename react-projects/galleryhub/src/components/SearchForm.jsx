import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
const {fetchImagesFromAPI} = useGlobalContext()

const [searchValue, setSearchValue] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault();
  if(!searchValue) return;
   fetchImagesFromAPI(searchValue)
  console.log(searchValue)
}

useEffect(()=>{
fetchImagesFromAPI('office')
},[])


  return (
    <section>

<h1 className="text-sky-500 text-2xl uppercase my-4 flex flex-col justify-center items-center">Gallery Hub</h1>


<form  className="border border-gray-400  w-max sm:w-full my-4">

<input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}  name="search" placeholder="office" id="input" className="outline-none px-2 py-1 text-gray-700 sm:w-44 " />
<button type="submit" onClick={handleSubmit} className="text-white  px-2 py-1  bg-blue-600">Search</button>

</form>

    </section>
  )
}
export default SearchForm