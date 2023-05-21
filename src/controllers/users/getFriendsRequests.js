import getFriendsRequests from "../../repositories/users/getFriendsRequests.js"

const getFriendsRequestsC = async (req,res) => {
  const result = await getFriendsRequests(req.user.id)

  if(result.error) return res.status(400).json(result)
  res.status(200).json(result)
}

export default getFriendsRequestsC
