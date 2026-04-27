// piano, la funzione da creare deve generare l'html di tutto l'anno di interesse, quindi initializeDropDowns deve aggiungere al suo html solo quello di interesse, inoltre lo year del bottone deve essere dato dal selettore che creerò, deve generare anche il dropdown e poi la funzione dropdown serve solo a renderlo interattivo
export function generateReport(reportObject) {
  const generalSelector = document.querySelector('select[name="report-year-selector"]');
  const year = generalSelector.value
  //console.log(year)
}


export function initializeDropDowns(year, html) {
  const dropDown = document.querySelector(`.js-year-container-${year}`);
  dropDown.addEventListener('click', (e) => {
    const button = e.target
    const container = document.querySelector(`.js-month-container-${button.dataset.yearId}`);
    if (button.classList.contains('js-show-report-button')) {
      if (!button.classList.contains('active')) {
        const html = `
          <div class="month-container js-month-container-2026">
            <div class="month-report">
              <div class="movement-name-container">
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
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
            <div class="month-report">
              febbraio
            </div>
          </div>
        `;
        container.innerHTML = html
        button.classList.add('active')
      } else if (button.classList.contains('active')) {
        container.innerHTML = '';
        button.classList.remove('active')
      }
    }
  });
}
