import { Router } from "express";
import { sendMessage } from "./controllers/chat";
import { auth, refreshToken } from "./controllers/auth";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router()


router.post("/send-message", authMiddleware(false), sendMessage)

router.post("/auth", auth)

router.post("/token/refresh", refreshToken)


export { router }
