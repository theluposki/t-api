import getMyFriends from "../../repositories/users/getMyFriends.js"

const getMyFriendsC = async (req,res) => {
  const result = await getMyFriends(req.user.id)

  if(result.error) return res.status(400).json(result)
  res.status(200).json(result)
}

export default getMyFriendsC
