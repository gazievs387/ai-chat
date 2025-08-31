import express from "express"
import cors from "cors"
import { config } from "dotenv";
import { router } from "./routes/routes";


config({quiet: true}) 

const app = express()
const port = 3001

app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {
    res.send()
})

app.use(router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
