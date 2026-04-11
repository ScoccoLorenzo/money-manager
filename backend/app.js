const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('../frontend'))

app.post('/', (req, res) => {
  console.log(req.body)
  res.json({result: true, message: 'success'})
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})