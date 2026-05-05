import {Movement} from './memory.js';
import {initializeSaveMovement} from './interface-functions.js';
import {initializeMovementsDisplay, initializeDeleteButtons, initializeSubmitMovement, renderMovements} from './preview-functions.js';
import {uploadMovementsFromLocalStorage, storeMovementsInLocalStorage} from './preview-functions.js'


const localStorageKey = 'movements';
let data = uploadMovementsFromLocalStorage(localStorageKey) || [];

const container = document.querySelector('.movement-display-container');

renderMovements(data, container)
initializeSaveMovement(Movement, data, localStorageKey, storeMovementsInLocalStorage);
initializeMovementsDisplay(data, container);
initializeDeleteButtons(data, container, localStorageKey, storeMovementsInLocalStorage);
initializeSubmitMovement(data, container, localStorageKey, storeMovementsInLocalStorage);

// bisogna implementare il local storage, ora salva in local ma non renderizza alla ricarica, risolvi