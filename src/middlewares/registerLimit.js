import { rateLimit } from "express-rate-limit"

export default rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 2,
  message: {
    code: 429,
    message: "Toomany request"
  }
})
