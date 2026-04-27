const express = require('express')
const app = express()

const {storeNewMovement, getYearData} = require('./middleware.js')


app.use(express.json())
app.use(express.static('../frontend'))

app.post('/', storeNewMovement, (req, res) => {
  res.json({result: true, message: 'success'})
}) // post movement to database

app.get('/report', (req, res) => {
  res.json({result: true, message: 'success'})
}) // get the page

app.get('/api/get-data/:year', getYearData) // saves in MonthlyReport object all movements of that particular year {ex. 2026}

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})