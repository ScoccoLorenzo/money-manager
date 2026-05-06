const express = require('express')
const app = express()

const {storeNewMovement, getYearData} = require('./middleware.js')


app.use(express.json())
app.use(express.static('../frontend'))

app.post('/', storeNewMovement, (req, res) => {
  res.json({result: true, message: 'success'})
})

app.get('/report', (req, res) => {
  res.json({result: true, message: 'success'})
}) // get the page

app.get('/api/get-data/:year', getYearData)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening...')
})