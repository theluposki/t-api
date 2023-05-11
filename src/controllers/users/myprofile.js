import myProfileController from "../../repositories/users/myProfile.js"

const myprofile = async (req,res) => {
  const result = await myProfileController(req.user.id)

  if(result.error) return res.status(400).json(result)
  res.status(200).json(result)
}

export default myprofile
