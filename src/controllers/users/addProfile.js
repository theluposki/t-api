import addProfileController from "../../repositories/users/addProfile.js"

const addProfile = async (req,res) => {
  const result = await addProfileController(req.user.id, req.body)

  if(result.error) return res.status(400).json(result)
  res.status(201).json(result)
}

export default addProfile
