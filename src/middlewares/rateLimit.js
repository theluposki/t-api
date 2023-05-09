import { rateLimit } from "express-rate-limit"

export default rateLimit({
    windowMs: 5000,
    max: 5,
    message: {
      code: 429,
      message: "Toomany request"
    }
})
