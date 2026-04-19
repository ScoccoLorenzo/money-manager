import {initializeDropDowns} from './functions.js'
import {MonthlyReport} from './objects.js';

initializeDropDowns(2026);


const report = new MonthlyReport()
const prova = await report.getData('/api/get-data/2028-03') // fetch di prova
console.log(prova)