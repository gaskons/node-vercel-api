import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.get("/", (_, res) => {
  res.send("Express on Vercel")
})

app.get("/port", (_, res) => {
  res.json({ port: PORT })
})


app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})

export default app