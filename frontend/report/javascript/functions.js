export async function generateReport(selector, reportObject) {
  const generalSelector = selector
  const year = generalSelector.value
  const report = await reportObject.getData(`/api/get-data/${year}`)
  const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
  let reportHtml = ''

  for (let i = 1; i <= 12; i++) {
    let monthStringId = ''
    monthStringId = String(i).padStart(2, '0');
    reportHtml += `
      <div class="month-report">
        <div class="month-name">${months[i - 1]}</div>
        <div class="movement-name-container">
          <div class="movement-name">
            <p>Benzina</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'benzina')}€</p>
          </div>
           <div class="movement-name">
            <p>Svago</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'svago')}€</p>
          </div>
           <div class="movement-name">
            <p>Pasti</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'pasti')}€</p>
          </div>
           <div class="movement-name">
            <p>Alcol</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'alcol')}€</p>
          </div>
           <div class="movement-name">
            <p>Vestiti</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'vestiti')}€</p>
          </div>
           <div class="movement-name">
            <p>Cura di sè</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'cura-di-se')}€</p>
          </div>
           <div class="movement-name">
            <p>Sport</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'sport')}€</p>
          </div>
           <div class="movement-name">
            <p>Hobby</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'hobby')}€</p>
          </div>
           <div class="movement-name">
            <p>Istruzione</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'istruzione')}€</p>
          </div>
           <div class="movement-name">
            <p>Salute</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'salute')}€</p>
          </div>
           <div class="movement-name">
            <p>Macchina</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'macchina')}€</p>
          </div>
           <div class="movement-name">
            <p>Necessità</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'necessità')}€</p>
          </div>
           <div class="movement-name">
            <p>Regali</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`, 'regali')}€</p>
          </div>
          <div class="month-tot-income-container">
            <p>Entrate tot.</p>
            <p>${report.createMonthTotalMovement('income', `${year}-${monthStringId}`)}€</p>
          </div>
          <div class="month-tot-expense-container">
            <p>Spese tot.</p>
            <p>${report.createMonthTotalMovement('expense', `${year}-${monthStringId}`)}€</p>
          </div>
          <div class="month-balance">
            <p>Bilancio</p>
            <p>${report.createMonthBalance(`${year}-${monthStringId}`)}€</p>
          </div>
        </div>
      </div>
    `
  }
  return reportHtml
}

export async function renderReport(container, callback, selector, reportObject) {
  const html = await callback(selector, reportObject);
  container.innerHTML = html
}