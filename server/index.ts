import cors from "cors"
import dotenv from "dotenv"
import express, { Request, Response } from "express"
import { router } from "./routes/run-javascript"

dotenv.config()
const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    return res.json({ msg: "hello..." })
})

app.use("/", router)

app.post("/run-code", (req: Request, res: Response) => {
    console.log("req.body ===", req.body)

    const { code, language } = req.body
    console.log("{code,language} ===", { code, language })

    return res.json({ msg: "posted" })
})

app.listen(port, () => {
    console.log(`Listening on ${port} 🚀`)
})
