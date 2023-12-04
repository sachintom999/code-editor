import { Dispatch, SetStateAction } from "react"

type Navbar = {
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
}

const Navbar = ({ setLanguage }: Navbar) => {
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
            <button className="px-4 py-2 rounded-md bg-purple-500 text-slate-300">
                Run
            </button>
        </div>
    )
}

export default Navbar
