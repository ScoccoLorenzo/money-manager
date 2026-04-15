export function initializeDropDowns(year) {
  const dropDown = document.querySelector(`.js-year-container-${year}`);
  dropDown.addEventListener('click', (e) => {
    const button = e.target
    const container = document.querySelector(`.js-month-container-${button.dataset.yearId}`);
    if (button.classList.contains('js-show-report-button')) {
      if (!button.classList.contains('active')) {
        const html = `
          <div class="month-report">
              gennaio
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
