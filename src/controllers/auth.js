import authRepository from "../repositories/auth/auth.js"

const auth = async (req, res) => {

  const result = await authRepository(req.body)

  if(result.error) return res.status(400).json(result)

  res.cookie('token', result.token, { httpOnly: true, secure: true, sameSite: 'none' });
  res.status(200).json(result.message)
}

export default auth
