const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(express.json())
app.use(routes)
app.use((error,req,res,next)=>{
  res.status(error.status || 500)
  res.json({error: error.menssage})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})