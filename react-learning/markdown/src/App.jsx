import Markdown from "./components/Markdown"

const App = () => {
  return (
    <div className="bg-slate-200">
<h1 className="text-center text-2xl pt-1 font-sriracha  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-yellow-600  ">Markdown Editior</h1>
<div className="title flex justify-between px-3 sm:hidden">
<h1 className="text-center text-2xl pt-1 font-sriracha  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600 pb-4 ">Markdown Code</h1>
<h1 className="text-center text-2xl pt-1 font-sriracha  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600 pb-4 ">Markdown Preview</h1>

</div>
      <Markdown/>
    </div>
  )
}
export default App