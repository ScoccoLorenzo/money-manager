const express = require('express')
const app = express()

const {storeNewMovement, getYearData} = require('./middleware.js')


app.use(express.json())
app.use(express.static('../frontend'))

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.post('/api/preview', storeNewMovement, (req, res) => {
  res.json({result: true, message: 'success'})
})

app.get('/report', (req, res) => {
  res.json({result: true, message: 'success'})
}) // get the page

app.get('/login', (req, res) => {
  res.json({result: true, message: 'success'})
}) // get the login page

app.get('/api/get-data/:year', getYearData)

app.post('/api/login', (req, res) => {
  console.log(req.body)
  res.json({result: true, message: 'success'})
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening...')
})