import { useState } from "react"
import CodeEditor from "./components/CodeEditor"
import Navbar from "./components/Navbar"

function App() {
    const [language, setLanguage] = useState("javascript")
    const [output, setOutput] = useState("")
    const [code, setCode] = useState(``)

    return (
        <div className="w-screen h-screen bg-slate-700 p-8">
            <div className="flex ">
                <div className="left-section w-1/2  p-4">
                    <Navbar
                        code={code}
                        language={language}
                        setLanguage={setLanguage}
                        setOutput={setOutput}
                        setCode={setCode}
                    />

                    <CodeEditor
                        language={language}
                        code={code}
                        setCode={setCode}
                    />
                </div>
                <div className="right-section w-1/2 bg-green-100 flex flex-col gap-10 h-full p-4">
                    <h3>Input:</h3>
                    <textarea className="w-full h-48"></textarea>
                    <h3>Output:</h3>
                    <textarea
                        className="w-full h-48 p-2 text-xs rounded-md"
                        value={output}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default App
