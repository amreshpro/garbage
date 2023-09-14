import CircularProgressBar from "./CircularProgressBar"

const MovieCard = (props) => {
  return (
    <div className="rounded-lg sticky flex flex-col gap-4">
<div className="img ">
<img src="/movie.jpg" alt="movie" className="w-36 h-52 rounded-lg" />

</div>
<div className="rating  w-16 h-16  rounded-full px-2.5 py-2 absolute bottom-9">
  <CircularProgressBar value={0.76} />
</div>
<div className="content ">
  <h1 className="font-semibold text-lg text-primary-950">Title</h1>
  <h1 className="text-grey " >1 Sep,2023</h1>
</div>
    </div>
  )
}
export default MovieCard