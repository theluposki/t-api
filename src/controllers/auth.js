import authRepository from "../repositories/auth/auth.js"

const auth = async (req, res) => {

  const result = await authRepository(req.body)
  res.status(200).json(result)
}

export default auth
