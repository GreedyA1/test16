const express = require('express')
const app = express()
const HOST = "127.0.0.1";
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.send('Hello API!')
})

app.get('/api/shmaybe', (req, res) => {
  res.send('Hellp Shmaybe!')
})

app.listen(port, HOST, () => {
  console.log(`Example app listening on port ${port}`)
})
