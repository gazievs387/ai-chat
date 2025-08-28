import express from "express"
import cors from "cors"
import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
import { isApiError } from "./types/utils";


config({quiet: true}) 

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send()
})


app.post('/send-message', async (req, res, next) => {
    try {
        const ai = new GoogleGenAI({});
        const result = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: req.body.message
        });

        const message = { id: Math.random() * 100000, text: result.text, type: "ai" };

        setTimeout(() => {
            res.json(message);
        }, 500);

    } catch (error) {
        if (isApiError(error)) {
            const status = error.status;

            switch (status) {
                case 429:
                    return res.status(429).json({
                        message: "Rate limit exceeded. Please try again later.",
                        code: "LIMIT_EXCEEDED"
                    });
                case 503:
                    return res.status(503).json({
                        message: "The model is temporarily unavailable. Please try again later.",
                        code: "MODEL_UNAVAILABLE"
                    });
                case 500:
                    return res.status(503).json({
                        message: "The model is temporarily unavailable. Please try again later.",
                        code: "MODEL_UNAVAILABLE"
                    });
                default:
                    return res.status(status || 500).json({
                        message: "An API error occurred.",
                        code: "API_ERROR",
                        details: error.message
                    });
            }
        }

        res.status(500).json({
            message: "An unexpected error occurred.",
            code: "UNEXPECTED_ERROR"
        });
        
    }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
