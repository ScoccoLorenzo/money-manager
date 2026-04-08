import {data, Movement} from './memory.js';
import {initializeSaveMovement} from './interface-functions.js';
import {initializeMovementsDisplay, initializeDeleteButtons} from './preview-functions.js';

const container = document.querySelector('.movement-display-container');

function initializeSubmitMovement(data, container) {
  container.addEventListener('submit', async function(e) {
    e.preventDefault();

    const index = Number(e.submitter.dataset.index)
    console.log(index)
  })
}

initializeSaveMovement(Movement, data);
initializeMovementsDisplay(data, container);
initializeDeleteButtons(data, container);
initializeSubmitMovement(data, container)