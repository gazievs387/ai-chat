import { Router } from "express";
import { getChat, getChats, sendMessage } from "./controllers/chat";
import { auth, refreshToken } from "./controllers/auth";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router()


router.post("/send-message", authMiddleware(false), sendMessage)

router.get("/chats", authMiddleware(), getChats)

router.get("/chat/:chatId", authMiddleware(), getChat)

router.post("/auth", auth)

router.post("/token/refresh", refreshToken)


export { router }
