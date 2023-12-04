import { Dispatch, SetStateAction } from "react"

type Navbar = {
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
    setOutput: Dispatch<SetStateAction<string>>
}

const Navbar = ({ setLanguage,setOutput }: Navbar) => {
    const handleClick = async () => {

        setOutput("")
        const reqBody = {
            code: "console.log('hello...')",
            inputData: null,
        }
        const response = await fetch("http://localhost:4001/run-javascript", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        })
        const text = await response.text()
        // console.log("text ===",text)
        setOutput(text)
        
        
        // console.log("json:", json)
        // console.log("response ===",response)
        
        
    }

    return (
        <div className="flex justify-between">
            <select
                className="mb-4"
                onChange={e => {
                    setLanguage(e.target.value)
                }}
            >
                <option value={"javascript"}>javascript</option>
                <option value={"python"}>python</option>
            </select>
            <button
                className="px-4 py-2 rounded-md bg-purple-500 text-slate-300"
                onClick={handleClick}
            >
                Run
            </button>
        </div>
    )
}

export default Navbar
