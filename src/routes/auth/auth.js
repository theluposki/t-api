import { Router } from "express"
import authController from "../../controllers/auth.js"
import resolver from "../../middlewares/errorAsync.js"

const route = Router()

route.post("/", resolver(authController))

export default route
