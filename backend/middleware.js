const fs = require('fs').promises
const databaseLocation = '../database.json'

async function storeNewMovement(req, res, next) {
  try {
    const database = await fs.readFile(databaseLocation, 'utf-8')
    
    const data = database ? JSON.parse(database) : []
    //console.log(data)
    data.push(req.body)
    await fs.writeFile(databaseLocation, JSON.stringify(data, null, 2))
    next()

  } catch(err) {
    next(err)
  }
}

async function getYearData(req, res, next) {
  try {
    const {year} = req.params
    const movements = []
    const database = await fs.readFile(databaseLocation, 'utf-8')
    if(!database) {
      res.status(404).json({message: 'Empty database'})
    }
    const data = JSON.parse(database)

    data.forEach((movement) => {
      if (movement && movement.date.startsWith(year)) {
        movements.push(movement)
      }
    })
    res.json(movements)
    
  } catch(err) {
    next(err)
  }
}

module.exports = {storeNewMovement, getYearData}