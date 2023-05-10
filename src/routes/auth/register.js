import { Router } from "express"

const route = Router()

import resolver from "../../middlewares/errorAsync.js"

route.post("/", resolver(async (req, res) => {
  await new Promise(r => setTimeout(r, 5000))
  throw new Error("Error Qualquer...")
  res.status(200).json({ register: "ok"})
}))

export default route
