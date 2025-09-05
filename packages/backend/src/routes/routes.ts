import { Router } from "express";
import { getChats, sendMessage } from "./controllers/chat";
import { auth, refreshToken } from "./controllers/auth";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router()


router.post("/send-message", authMiddleware(false), sendMessage)

router.get("/chats", authMiddleware(), getChats)

router.post("/auth", auth)

router.post("/token/refresh", refreshToken)


export { router }
