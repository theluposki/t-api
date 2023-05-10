const error = (error, req, res, next) => {
  if(error) return res.status(500).json({ error: "Server Internal Error"})
  next()
}

export default error
