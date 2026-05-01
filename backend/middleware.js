const fs = require('fs').promises

async function storeNewMovement(req, res, next) {
  try {
    const database = await fs.readFile('../database.json', 'utf-8')
    
    const data = database ? JSON.parse(database) : []
    //console.log(data)
    data.push(req.body)
    await fs.writeFile('../database.json', JSON.stringify(data, null, 2))
    next()

  } catch(err) {
    next(err)
  }
}

async function getYearData(req, res, next) {
  const {year} = req.params
  const movements = []
  const database = await fs.readFile('../database.json', 'utf-8')
  if(!database) {
    res.status(404).json({message: 'Empty database'})
  }
  const data = JSON.parse(database)

  data.forEach((movement) => {
    if (movement.date.startsWith(year)) {
      movements.push(movement)
    }
  })
  res.json(movements)
}

module.exports = {storeNewMovement, getYearData}