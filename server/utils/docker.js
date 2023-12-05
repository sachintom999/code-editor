"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDockerProcess = void 0;
const child_process_1 = require("child_process");
const runDockerProcess = (code, inputData, dockerImage) => {
    const codeWithEscapedNewline = code.replace(/(?<="[^"]*)\\n(?=[^"]*")/g, "\\\\n");
    return new Promise((resolve, reject) => {
        let executionOutput = ``;
        const dockerProcess = (0, child_process_1.spawn)("docker", [
            "run",
            "--rm",
            "-e",
            `CODE=${codeWithEscapedNewline}`,
            `-e`,
            `INPUT_DATA=${inputData}`,
            dockerImage,
        ]);
        dockerProcess.stdout.on("data", data => {
            executionOutput += data;
        });
        dockerProcess.stderr.on("data", data => {
            executionOutput += data;
        });
        dockerProcess.on("close", code => {
            if (code === 127) {
                reject(new Error("internal server error"));
            }
            else {
                resolve(executionOutput);
            }
        });
    });
};
exports.runDockerProcess = runDockerProcess;
