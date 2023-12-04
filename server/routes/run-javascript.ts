import express, { Request, Response } from "express"
import { runDockerProcess } from "../utils/docker"

export const router = express.Router()

router.post("/run-javascript", async (req: Request, res: Response) => {
    try {
        const { code, inputData } = req.body

        const execOutput = await runDockerProcess(
            code,
            inputData,
            `javascript-service`
        )
        res.send(execOutput)
    } catch (error) {
        console.error(error)
        return res.status(500).json(error)
    }
})


