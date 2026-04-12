const express = require('express')
const app = express()

const {storeNewMovement} = require('./middleware.js')


app.use(express.json())
app.use(express.static('../frontend'))

app.post('/', storeNewMovement, (req, res) => {
  res.json({result: true, message: 'success'})
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})