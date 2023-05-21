import addFriend from "../../repositories/users/addFriend.js"

const addFriendC = async (req,res) => {
  if(!req.body.nickname) return res.status(400).json({ error: "nickname é obrigatorio"})
  const result = await addFriend(req.user.id, req.body)
  if(result.error) return res.status(400).json(result)
  res.status(200).json(result)
}

export default addFriendC
