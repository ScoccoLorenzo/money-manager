const fs = require('fs').promises

async function storeNewMovement(req, res, next) {  // non va, errore 500
  try {
    const movementToStore = JSON.stringify(req.body)
    await fs.appendFile('../database.json', movementToStore)
    next()

  } catch(err) {
    next(err)
  }
}

module.exports = {storeNewMovement}