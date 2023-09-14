const SearchBanner = () => {
  return (
    <div className=" text-primary-50  bg-primary-600 w-screen h-screen  flex flex-col items-center justify-center gap-12 ">

      <div className="content flex flex-col gap-4 pl-4">
        <h1 className="text-6xl sm:text-2xl font-bold">Welcome.</h1>
        <h2 className="text-4xl sm:text-xl"> Millions of Movies, TV Shows to discover.Explore now.</h2>
      </div>

      <div className="search-box  overflow-hidden rounded-2xl bg-primary-50 text-primary-400 w-[90vw]  mx-4   flex  ">
        <input type="text" placeholder="Search for a movie,tv shows ..." 
        
        className="outline-none w-full pl-4 bg-primary-50 p-1 rounded-l-2xl placeholder:text-primary-400 text-primary-700"
        />
        <button type="submit" className="bg-primary-950 text-primary-100 w-max h-full  px-2 py-2 font-bold">Search</button>
      </div>
    </div>
  )
}
export default SearchBanner