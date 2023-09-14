import axios from 'axios';
import { createContext,useContext,useEffect,useState}  from 'react'


const AppContext = createContext();

export const AppProvider = ({children})=>{

const [isLoading, setIsLoading] = useState(false)
const [fetchResult, setFetchResult] = useState([])

const fetchImagesFromAPI = async(searchValue)=>{
setIsLoading(true)
    try{

        const url =`https://api.unsplash.com/search/photos?client_id=L2LLTXbOi1MRljWB-gaIhah96RCyEH1f5nBIKvzk4Yw&query=${searchValue}`
    
    if(searchValue){
    const res = await axios(url)
     .then((res)=>{
      
        setFetchResult(res.data.results)
        setIsLoading(false)
        return res

    }).catch((err)=>{
        console.log(err)
    })


    }
    }catch(err){
        console.log(err)
    }



}




const toggleDarkTheme = ()=>{
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)

    const body = document.querySelector('body')

    body.classList.toggle("bg-gray-800",newDarkTheme)
    body.classList.toggle("text-white",newDarkTheme)
}


const [isDarkTheme, setIsDarkTheme] = useState(false)


    return(
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,fetchImagesFromAPI,fetchResult,isLoading}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>useContext(AppContext);