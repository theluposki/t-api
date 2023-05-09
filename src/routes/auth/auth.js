import { Router } from "express"

const route = Router()

route.post("/", (req, res) => {
  res.status(200).json({ auth: "ok"})
})

export default route
