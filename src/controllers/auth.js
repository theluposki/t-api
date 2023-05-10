const auth = (req, res) => {
  res.status(200).json({ 
    auth: "autenticado"
  })
}

export default auth
