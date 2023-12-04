import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import Navbar from "./components/Navbar"

function App() {
    const [language, setLanguage] = useState("javascript")
    const [output, setOutput] = useState("")

    return (
        <div className="w-screen h-screen bg-slate-700 p-8">
            <div className="flex ">
                <div className="left-section w-1/2  p-4">
                    <Navbar
                        language={language}
                        setLanguage={setLanguage}
                        setOutput={setOutput}
                    />

                    {/* <textarea className="mt-16 w-full h-48 text-xs"></textarea> */}
                    <CodeEditor language={language} />
                </div>
                <div className="right-section w-1/2 bg-green-100 flex flex-col gap-10 h-full p-4">
                    <h3>Input:</h3>
                    <textarea className="w-full h-48"></textarea>
                    <h3>Output:</h3>
                    <textarea className="w-full h-48 p-2 text-xs rounded-md" value={output}></textarea>
                </div>
            </div>
        </div>
    )
}

export default App
