import axios from "axios"


const baseUrl ='https://api.themoviedb.org/3/' 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGRiYmE3M2Y3ODExZjRmODY1MDAzNWIxYTBhMzgyZSIsInN1YiI6IjY0NmE0OTdkYzM1MTRjMDEzYTU2MzFiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DObF4-1LR65i6mF0M3hkejNs_MNURwbVYpMFVKwvmH4'
  }
};


export const fetchDataFromTMDBApi = async(url)=>{

  const fetchResult =   await axios.get(baseUrl+url,options).then((data)=>{

    return data
}).catch((error)=>{
    console.log(error)
})

return fetchResult

}





