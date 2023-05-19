import findUserByNickname from "../../repositories/users/findUserByNickname.js"

const findUsersByNickname = async (req,res) => {
  const { nickname } = req.body

  const users = await findUserByNickname(nickname)

  if(users.error) return res.status(400).json(users)
  res.status(200).json(users)
}

export default findUsersByNickname
