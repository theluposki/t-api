import { Router } from "express"
import authController from "../../controllers/auth.js"

const route = Router()

route.post("/", authController)

export default route
