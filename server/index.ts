import cors from "cors"
import dotenv from "dotenv"
import express, { Request, Response } from "express"
import mongoose from "mongoose"

dotenv.config()
const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    console.log("123 ===", 123)

    return res.json({ msg: "hello..." })
})

app.post("/run-code", (req: Request, res: Response) => {
    console.log("req.body ===", req.body)

    const { code, language } = req.body
    console.log("{code,language} ===", { code, language })

    return res.json({ msg: "posted" })
})

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    app.listen(port, () => {
        console.log(`connected to DB listening on ${port} !!`)
    })
})
