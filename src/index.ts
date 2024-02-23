// src/index.js
import express from "express";
import dotenv from "dotenv";
import {errorMiddleware} from "./middlewares/error-middleware";
import cors from "cors";

import captureFugitiveRouter from "./routes/capture-fugitive";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions))

app.use(captureFugitiveRouter)

app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});