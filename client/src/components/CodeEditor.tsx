import Prism from "prismjs" // Import Prism.js
import "prismjs/themes/prism.css" // Import the theme you prefer
import React from "react"
import Editor from "react-simple-code-editor"

// Import the languages you'll use
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-python"

export default function CodeEditor({ language }: { language: string }) {
    const [code, setCode] = React.useState(
        `function logger() {\n  console.log("hello");\n} \n\nlogger()`
    )

    console.log("language ===", language)

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
            } // Adjust as needed
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height:"900px"
            }}
        />
    )
}
