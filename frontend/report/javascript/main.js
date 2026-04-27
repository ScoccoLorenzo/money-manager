import {initializeDropDowns, generateReport} from './functions.js'
import {MonthlyReport} from './objects.js';

initializeDropDowns(2026);

const report = await MonthlyReport.getData('/api/get-data/2026') //test inizializzazione
console.log(report)
//console.log(report.createMonthTotalMovement('expense', 'alcol'))

generateReport()