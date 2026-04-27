export class MonthlyReport {

  constructor(data) {
    this.movements = data
  }
  
  static async getData(url) { //factory method
    try {
      const res = await fetch(url) //api/get-data/:year
      if(!res.ok) {
        throw new Error(`Errore HTTP: ${res.status}`);
      }

      const data = await res.json()
      console.log(data)
      return new MonthlyReport(data)

    } catch(err) {
      console.log(err)
    }
  }

  createMonthTotalMovement(type, scope) {
    let sum = 0
    this.movements.forEach(movement => {
      if (movement.type === type && movement.scope === scope) {
        sum += movement.value
      }
    })
    sum = (sum / 100)
    return sum
  }
}