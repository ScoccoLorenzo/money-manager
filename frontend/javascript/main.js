import {data, Movement} from './memory.js';
import {initializeSaveMovement} from './interface-functions.js';
import {initializeMovementsDisplay, initializeDeleteButtons, initializeSubmitMovement} from './preview-functions.js';


const container = document.querySelector('.movement-display-container');

initializeSaveMovement(Movement, data);
initializeMovementsDisplay(data, container);
initializeDeleteButtons(data, container);
initializeSubmitMovement(data, container)