


const Hashtag = ({color,title,textColor="text-white"}) => {

  return (
    <>
    <p className={`${color} ${textColor} font-mono p-0.5   rounded-lg text-xs`} >#{title}</p>
    </>
  )
}
export default Hashtag