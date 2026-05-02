export class MonthlyReport {

  constructor(data) {
    this.movements = data
  }
  
  static async getData(url) { //factory method
    try {
      const res = await fetch(url) // /api/get-data/:year
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

  createMonthTotalMovement(type, month, scope) { //month has to be in form 2000-01
    let sum = 0
    this.movements.forEach(movement => {
      if (movement.type === type && movement.scope === scope && movement.date.startsWith(month)) {
        sum += movement.value
      } else if (movement.type === type && scope === undefined && movement.date.startsWith(month)) {
        sum += movement.value //se non passo scope ho la somma totale di expense o income
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