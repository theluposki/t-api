import { Router } from "express"
import resolver from "../../middlewares/errorAsync.js"
import myprofileController from "../../controllers/users/myprofile.js"
import addProfile from "../../controllers/users/addProfile.js"
import validaToken from "../../middlewares/validToken.js"

import findUsersByNickname from '../../controllers/users/findUserByNickname.js'
import sendFriendRequestC from "../../controllers/users/sendFriendRequest.js"
import getFriendsRequestsC from "../../controllers/users/getFriendsRequests.js"
import addFriendC from "../../controllers/users/addFriend.js"

const route = Router()

route.get("/myprofile", validaToken, resolver(myprofileController))
route.post("/add-profile", validaToken,resolver(addProfile))
route.post("/search-users", validaToken, resolver(findUsersByNickname))
route.post("/send-friend-request", validaToken, resolver(sendFriendRequestC))
route.get("/get-friends-requests", validaToken, resolver(getFriendsRequestsC))
route.post("/add-friend", validaToken, resolver(addFriendC))

export default route
