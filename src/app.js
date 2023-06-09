/* Import Deps*/
import express from "express"
import cors from "cors"

import cookieParser from 'cookie-parser';

/* Import Middlewares*/
import rateLimit from "./middlewares/rateLimit.js"
import registerLimit from "./middlewares/registerLimit.js"
import error from "./middlewares/error.js"

/* Import Routes*/
import auth from "./routes/auth/auth.js"
import register from "./routes/auth/register.js"
import users from "./routes/users/profile.js"

const app = express()
const v1 = "/api/v1"

/* Middlewares */
// app.use(rateLimit)
app.use(cors({
  origin: 'https://localhost:5173',
  credentials: true
}))
app.use(cookieParser());
app.use(express.json())
app.use("/", express.static("src/public"))

/* Routes */
app.use(`${v1}/auth`, auth)
app.use(`${v1}/register`, register)
app.use(`${v1}/users`, users)


app.use(error)
/* Export App */
export default app
