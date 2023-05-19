import sendFriendRequest from "../../repositories/users/sendFriendRequest.js"

const sendFriendRequestC = async (req,res) => {
  const result = await sendFriendRequest(req.user.id, req.body)

  if(result.error) return res.status(400).json(result)
  res.status(200).json(result)
}

export default sendFriendRequestC
