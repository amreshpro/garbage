import Gallery from "./components/Gallery"
import SearchForm from "./components/SearchForm"
import ThemeToggle from "./components/ThemeToggle"

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen px-2 ">

<ThemeToggle/>
<SearchForm/>
<Gallery/>

    </main>
  )
}
export default App