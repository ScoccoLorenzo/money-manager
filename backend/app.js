require('dotenv').config({ path: __dirname + '/.env' })
const path = require('path')
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const {controlCredentials, checkToken, storeNewMovement, getYearData} = require('./middleware.js')


app.use(express.json())
app.use(cookieParser())
app.use(express.static('../frontend'))

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login/index.html')
)}) // get the login page

app.post('/api/login', controlCredentials) //controlla le credenziali ed elargisce il token

app.get('/preview', checkToken, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/preview/preview.html'))
})

app.post('/api/preview', checkToken, storeNewMovement, (req, res) => {
  res.json({result: true, message: 'success'})
})

app.get('/report', checkToken, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/report/report.html'))
})

app.get('/api/get-data/:year', checkToken, getYearData)

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening...')
})