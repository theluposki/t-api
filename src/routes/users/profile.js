import { Router } from "express"
import resolver from "../../middlewares/errorAsync.js"
import myprofileController from "../../controllers/users/myprofile.js"
import validaToken from "../../middlewares/validToken.js"

const route = Router()

route.get("/myprofile", validaToken,resolver(myprofileController))

export default route
