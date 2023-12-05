import cors from "cors"
import dotenv from "dotenv"
import express, { Request, Response } from "express"
import { executeCode } from "./utils/runCode"

dotenv.config()
const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

app.post("/run-code", async (req: Request, res: Response) => {
    const { code, language, inputData } = req.body

    try {
        const execOutput = await executeCode(language, code, inputData)

        console.log("code ===",code)
        
        

        res.send(execOutput)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error)
    }
})

app.listen(port, () => {
    console.log(`Listening on ${port} 🚀`)
})
