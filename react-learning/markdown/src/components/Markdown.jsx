import { useState } from "react"
import ReactMarkdown from "react-markdown"


const Markdown = () => {

    const [markdown, setMarkdown] = useState("## Edit your markdown here...")

    return (
        <div className="font-sans bg-pink-100 flex flex-wrap justify-between gap-2 px-2 py-2 sm:flex-col sm:w-full ">

            {/* input */}
          


                <textarea value={markdown} onChange={(e) => { setMarkdown(e.target.value) }} className="input text-lg text-roboto py-1 px-2 pt-4 pb-2  w-2/5 sm:w-full sm:h-96 outline-none border-0 rounded-lg shadow-lg"></textarea>

            

            {/* output */}


                <ReactMarkdown className="bg-gray-100 w-2/5 px-2 py-1 mr-1 rounded-lg sm:w-full">
                    {markdown}
                </ReactMarkdown>

           
        </div>

    )
}
export default Markdown