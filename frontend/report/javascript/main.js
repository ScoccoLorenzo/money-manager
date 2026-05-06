import {generateReport, renderReport} from './functions.js'
import {MonthlyReport} from './objects.js';

const generalSelector = document.querySelector('select[name="report-year-selector"]');
const container = document.querySelector('.js-reports-container')

renderReport(container, generateReport, generalSelector, MonthlyReport)

generalSelector.addEventListener('change', () => {
  renderReport(container, generateReport, generalSelector, MonthlyReport)
})