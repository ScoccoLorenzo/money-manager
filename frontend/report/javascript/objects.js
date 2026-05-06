export class MonthlyReport {

  constructor(data) {
    this.movements = data
  }
  
  static async getData(url) {
    try {
      const res = await fetch(url)
      if(!res.ok) {
        throw new Error(`Errore HTTP: ${res.status}`);
      }

      const data = await res.json()
      //console.log(data)
      return new MonthlyReport(data)

    } catch(err) {
      console.log(err)
    }
  }

  createMonthTotalMovement(type, month, scope) { 
    let sum = 0
    this.movements.forEach(movement => {
      const date = new Date(movement.date).toISOString().slice(0, 10)
      if (movement.type === type && movement.scope === scope && date.startsWith(month)) {
        sum += movement.value
      } else if (movement.type === type && scope === undefined && date.startsWith(month)) {
        sum += movement.value
      }
    })
    sum = (sum / 100)
    return sum
  }

  createMonthBalance(month) {
    const totalExpenses = this.createMonthTotalMovement('expense', month) * 100
    const totalIncome = this.createMonthTotalMovement('income', month) * 100

    return (totalIncome - totalExpenses) / 100
  }
}