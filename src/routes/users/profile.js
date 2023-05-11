import { Router } from "express"
import resolver from "../../middlewares/errorAsync.js"
import myprofileController from "../../controllers/users/myprofile.js"
import addProfile from "../../controllers/users/addProfile.js"
import validaToken from "../../middlewares/validToken.js"

const route = Router()

route.get("/myprofile", validaToken,resolver(myprofileController))
route.post("/add-profile", validaToken,resolver(addProfile))


export default route
