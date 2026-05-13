const db = require('./db.js')
const databaseLocation = '../database.json'
const jwt = require('jsonwebtoken')

  async function controlCredentials(req, res, next) {
    const {username, password} = req.body

    if (username !== process.env.APP_USERNAME || password !== process.env.APP_PASSWORD) { 
      return res.json({ result: false, message: 'credenziali errate' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });
    
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    })
    res.json({result: true})
  }

function checkToken(req, res, next) {
  const token = req.cookies?.token;
  
  if (!token) return res.redirect('/login')

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch(err) {
    return res.redirect('/login');
  }
}

async function storeNewMovement(req, res, next) {
  try {
    const {type, value, scope, date, notes} = req.body
    
    await db.query(
      'INSERT INTO movements (type, value, scope, date, notes) VALUES ($1, $2, $3, $4, $5)',
      [type, value, scope, date, notes]
    )
    next()

  } catch(err) {
    next(err)
  }
}

async function getYearData(req, res, next) {
  try {
    const {year} = req.params

    const movements = await db.query(
      'SELECT * FROM movements WHERE date >= $1 AND date <= $2',
      [`${year}-01-01`, `${year}-12-31`]
    )

    if (movements.rows.length === 0) {
      return res.status(404).json({ message: 'Empty database' })
    }

    res.json(movements.rows)

  } catch(err) {
    next(err)
  }
}

module.exports = {controlCredentials, checkToken, storeNewMovement, getYearData}