import registerRepository from "../repositories/auth/register.js"

const register = async (req, res) => {
  const result = await registerRepository(req.body)
  if(result.error) return res.status(400).json(result)

  return res.status(201).json(result)
}

export default register
