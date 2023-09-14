import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ProjectContainer from "./components/ProjectContainer"
import { BrowserRouter,Router,Routes,Route } from "react-router-dom"
import SkilLContainer from "./components/SkilLContainer"
import Footer from "./components/Footer"
import Landing from "./components/Landing"


const App = () => {



  return (
    <BrowserRouter>
<Navbar/>
  <Routes>

<Route  path="/" element={<Home/>} />
<Route exact path="/work" element={<ProjectContainer/>}/>
<Route exact path='/skills' element={<SkilLContainer/>}/>
{/* <Route exact path='/about' element={<Landing/>}/> */}
  </Routes>
<Footer/>
    </BrowserRouter>
  )
}
export default App