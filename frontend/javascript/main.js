import {data, Movement} from './memory.js';
import {initializeSaveMovement} from './interface-functions.js';

const container = document.querySelector('.movement-display-container');

function renderMovements(data, container) {
  let intermediateContainer = '';

  data.forEach((movement, index) => {
    intermediateContainer += `
      <form class="movement-display" method="post">
        <p>${movement.type}</p>
        <p>${movement.value / 100}€</p>
        <p>${movement.scope}</p>
        <p>${movement.date}</p>
        <p>${movement.notes}</p>
        <button type="button" class="js-delete-movement-button" data-index="${index}">Delete</button>
        <button type="submit">Submit</button>
      </form>
      `
    })
    container.innerHTML = intermediateContainer;
}

function initializeDeleteButtons(){
  // inizializza i delete buttons
  document.querySelector('.movement-display-container')
    .addEventListener('click', (e) => {
      if (e.target.classList.contains('js-delete-movement-button')) {
        //elimina l'oggetto e renderizza le note
        const index = Number(e.target.dataset.index);
        console.log(index)
        data.splice(index, 1); //per qualche ragione non elimina l'ultima nota rimasta, bug!!!!
        console.log(data)
        renderMovements(data, container);
      }
    })
}

function initializeMovementsDisplay() {
  // crea la preview dei movimenti
  document.querySelector('.movement-form')
    .addEventListener('submit', function(e) {
      e.preventDefault();

      renderMovements(data, container);
    })
}

initializeSaveMovement(Movement, data);
initializeMovementsDisplay();
initializeDeleteButtons();