const db = require('./db.js')
const databaseLocation = '../database.json'

async function storeNewMovement(req, res, next) {
  try {
    const {type, value, scope, date, notes } = req.body
    
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

module.exports = {storeNewMovement, getYearData}