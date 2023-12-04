import { spawn } from "child_process"

export const runDockerProcess = (
    code: string,
    inputData: string,
    dockerImage: string
): Promise<string> => {
    const codeWithEscapedNewline = code.replace(
        /(?<="[^"]*)\\n(?=[^"]*")/g,
        "\\\\n"
    )

    return new Promise((resolve, reject) => {
        let executionOutput = ``
        const dockerProcess = spawn("docker", [
            "run",
            "--rm",
            "-e",
            `CODE=${codeWithEscapedNewline}`,
            `-e`,
            `INPUT_DATA=${inputData}`,
            dockerImage,
        ])

        dockerProcess.stdout.on("data", data => {
            executionOutput += data
        })

        dockerProcess.stderr.on("data", data => {
            executionOutput += data
        })

        dockerProcess.on("close", code => {
            if (code === 127) {
                reject(new Error("internal server error"))
            } else {
                resolve(executionOutput)
            }
        })
    })
}
