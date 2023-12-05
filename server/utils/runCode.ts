import { runDockerProcess } from "./docker"

export async function executeCode(
    language: string,
    code: string,
    inputData: string
) {
    try {
        const execOutput = await runDockerProcess(
            code,
            inputData,
            `${language}-service`
        )

        return execOutput
    } catch (error) {
        console.log("error ===", error)
    }
}
