import {data, Movement} from './memory.js';
import {initializeSaveMovement} from './interface-functions.js';

const container = document.querySelector('.movement-display-container');

function renderMovementsDisplay() {
  document.querySelector('.movement-form')
    .addEventListener('submit', function(e) {
      e.preventDefault();

      let intermediateContainer = '';

      data.forEach((movement) => {
        intermediateContainer += `
          <form class="movement-display" method="post">
            <p>${movement.type}</p>
            <p>${movement.value / 100}€</p>
            <p>${movement.scope}</p>
            <p>${movement.date}</p>
            <p>${movement.notes}</p>
            <button type="button">Delete</button>
            <button type="submit">Submit</button>
          </form>
        `
      container.innerHTML = intermediateContainer;
    })
  })
}

initializeSaveMovement(Movement, data);
renderMovementsDisplay();