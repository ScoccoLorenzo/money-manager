import {generateReport} from './functions.js'
import {MonthlyReport} from './objects.js';


const html = await generateReport(MonthlyReport);
document.querySelector('.js-reports-container').innerHTML = html

/*const report = await MonthlyReport.getData('/api/get-data/2026') //test inizializzazione
//console.log(report)
console.log(report.createMonthTotalMovement('expense', 'alcol', '2026-04'))*/