const express = require('express')
const app = express()

const {storeNewMovement, getMonthlyData} = require('./middleware.js')


app.use(express.json())
app.use(express.static('../frontend'))

app.post('/', storeNewMovement, (req, res) => {
  res.json({result: true, message: 'success'})
}) // post movement to database

app.get('/report', (req, res) => {
  res.json({result: true, message: 'success'})
}) // get the page

app.get('/api/get-data/:month', getMonthlyData) // saves in MonthlyReport object all movements of that particular month

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})