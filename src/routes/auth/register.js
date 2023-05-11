import { Router } from "express"
import registerController from "../../controllers/register.js"

const route = Router()

import resolver from "../../middlewares/errorAsync.js"

route.post("/", resolver(registerController))

export default route
