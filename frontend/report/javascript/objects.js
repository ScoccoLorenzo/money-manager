export class MonthlyReport {

  async getData(url) {
    try {
      const res = await fetch(url) //api/get-data/:month
      if(!res.ok) {
        throw new Error(`Errore HTTP: ${res.status}`);
      }

      const data = await res.json()
      return data

    } catch(err) {
      console.log(err)
    }
  } 
}