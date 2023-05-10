import registerRepository from "../repositories/auth/register.js"

const register = async (req, res) => {
  const result = await registerRepository(req.body)
  
  res.status(200).json(result)
}

export default register