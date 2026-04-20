export class MonthlyReport {

  constructor(data) {
    this.movements = data
  }

  static async getData(url) { //factory method
    try {
      const res = await fetch(url) //api/get-data/:month is the input
      if(!res.ok) {
        throw new Error(`Errore HTTP: ${res.status}`);
      }

      const data = await res.json()
      return new MonthlyReport(data)

    } catch(err) {
      console.log(err)
    }
  } 
}