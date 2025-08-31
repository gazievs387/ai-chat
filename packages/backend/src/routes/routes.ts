import { Router } from "express";
import { sendMessage } from "./controllers/chat";


const router = Router()


router.post("/send-message", sendMessage)

export { router }
