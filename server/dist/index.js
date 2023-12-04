"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    console.log("123 ===", 123);
    return res.json({ msg: "hello..." });
});
app.post("/run-code", (req, res) => {
    console.log("req.body ===", req.body);
    const { code, language } = req.body;
    console.log("{code,language} ===", { code, language });
    return res.json({ msg: "posted" });
});
mongoose_1.default.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => {
        console.log(`connected to DB listening on ${port} !!`);
    });
});
