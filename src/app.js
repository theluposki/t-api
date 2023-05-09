/* Import Deps*/
import express from "express"
import cors from "cors"

/* Import Middlewares*/
import rateLimit from "./middlewares/rateLimit.js"
import registerLimit from "./middlewares/registerLimit.js"

/* Import Routes*/
import auth from "./routes/auth/auth.js"
import register from "./routes/auth/register.js"

const app = express()
const v1 = "/api/v1/"

/* Middlewares */

app.use(rateLimit)
app.use(cors())
app.use(express.json())
app.use("/", express.static("src/public"))

/* Routes */
app.use(`${v1}/auth`, auth)
app.use(`${v1}/register`, registerLimit, register)

/* Export App */
export default app
