export async function generateReport(reportObject) {
  const generalSelector = document.querySelector('select[name="report-year-selector"]');
  const year = generalSelector.value
  const report = await reportObject.getData(`/api/get-data/${year}`)
  let reportHtml = ''

  //console.log(year)
  for (let i = 1; i <= 12; i++) {
    let monthStringId = ''
    monthStringId = String(i).padStart(2, '0');
    //console.log(`${year}-${monthStringId}`)
    //console.log(report)
    reportHtml += `
      <div class="month-report">
        <div class="movement-name-container">
          <div class="movement-name">
            <p>benzina</p>
            <p>${report.createMonthTotalMovement('expense', 'benzina', `${year}-${monthStringId}`)}</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>
           <div class="movement-name">
            <p>benzina</p>
            <p>0€</p>
          </div>

          <div class="month-tot-expense-container">
            <p>Spese totali</p>
            <p>0€</p>
          </div>
          <div class="month-tot-income-container">
            <p>Entrate totali</p>
            <p>0€</p>
          </div><div class="month-budget">
            <p>Bilancio</p>
            <p>0€</p>
          </div>
        </div>
      </div>
    `
  }

  //console.log(reportHtml)
  /*document.body.insertAdjacentHTML('beforeend',`
    <div class="month-container js-month-container-2026">
      ${reportHtml}
    </div>
  `)*/
  return reportHtml
}