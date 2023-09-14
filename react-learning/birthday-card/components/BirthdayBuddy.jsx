import React ,{useState} from 'react'



const BCard=({name,img,age})=>{
    return(<>
<div className="container flex  gap-2 bg-white">
    <div className="img rounded-full bg-white">
        <img src={img} alt={name} className="w-24 h-24 object-cover rounded-full" />
    </div>
    <div className="text-start bg-white">
        <h1 className="name text-black m-1 text-2xl">{name}</h1>
        <h3 className="age text-gray-400">{age} years</h3>
    </div>
</div>


</>

    )
}



const BirthdayBuddy = () => {

const [count, setCount] = useState(5)

const handleClear=()=>[
    setCount(0)
]

  return (
    <div className=" m-2 p-5 w-1/2 bg-white flex flex-col gap-5">
<h1 className="text-3xl">{count} Birthday Today</h1>
<div className="person-container flex flex-col gap-8 bg-white">
{
    count>0 && (<>
        <BCard img="/1.jpg" name="Cristina" age={26} />
    <BCard img="/2.jpg" name="Hastor Hogan" age={21} />
    <BCard img="/3.jpg" name="Larry Little" age={29} />
    <BCard img="/4.jpg" name="Lara Dutta" age={32} />
    <BCard img="/5.jpg" name="Lola hudson" age={32} />
    
    
    </>

    )
}
</div>
<button className="w-full m-2 p-1 pt-2 mt-6 text-white bg-purple-600 text-center" onClick={handleClear}>Clear All</button>

    </div>
  )
}
export default BirthdayBuddy