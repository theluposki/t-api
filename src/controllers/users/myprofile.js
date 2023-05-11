const myprofile = async (req,res) => {
  res.status(200).json({
    id: 1,
    name: "Luposki",
    user: req.user
  })
}

export default myprofile
