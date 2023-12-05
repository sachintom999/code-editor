import Prism from "prismjs"
import "prismjs/themes/prism.css"
import { Dispatch, SetStateAction } from "react"
import Editor from "react-simple-code-editor"

import "prismjs/components/prism-javascript"
import "prismjs/components/prism-python"

type CodeEditor = {
    language: string
    code: string
    setCode: Dispatch<SetStateAction<string>>
}

export default function CodeEditor({ language, code, setCode }) {
    const getLanguage = (language: string) => {
        switch (language) {
            case "python":
                return Prism.languages.python
            case "javascript":
                return Prism.languages.javascript
            default:
                return Prism.languages.javascript
        }
    }

    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code =>
                Prism.highlight(code, getLanguage(language), language)
            }
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: "600px",
                // padding: "16px",
            }}
        />
    )
}
