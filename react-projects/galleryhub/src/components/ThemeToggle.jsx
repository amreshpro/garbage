import { useGlobalContext } from "../context"
import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'

const ThemeToggle = () => {

const {isDarkTheme,toggleDarkTheme} = useGlobalContext();


  return (
    <div className=" flex flex-end px-2 justify-end w-screen  ">

        <button className="w-max p-1" onClick={toggleDarkTheme}> 

{ 
isDarkTheme ?<FiSun className="text-yellow-600   text-2xl" />:<HiMoon  className="text-slate-600 text-2xl  "/>

}
        </button>
    </div>
  )
}
export default ThemeToggle