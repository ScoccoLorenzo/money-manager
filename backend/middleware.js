const { data } = require('../frontend/javascript/memory')

const fs = require('fs').promises

async function storeNewMovement(req, res, next) {
  try {
    const database = await fs.readFile('../database.json', 'utf-8')
    
    const data = database ? JSON.parse(database) : []
    console.log(data)
    data.push(req.body)
    await fs.writeFile('../database.json', JSON.stringify(data, null, 2))
    next()

  } catch(err) {
    next(err)
  }
}

module.exports = {storeNewMovement}