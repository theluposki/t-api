import { Router } from "express"

const route = Router()

route.post("/", (req, res) => {
  res.status(200).json({ register: "ok"})
})

export default route
