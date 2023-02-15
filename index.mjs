import express from 'express'

const app = express()

app.get("/", (_, res) => {
  res.send("Express on Vercel")
})

app.listen(5000, () => {
  console.log("Running on port 5000")
})

export default app