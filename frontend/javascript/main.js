import {data, Movement} from './memory.js';

document.querySelector('.movement-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    const movementType = document.querySelector('[name="movement-type"]');

    const movement = new Movement(
      movementType.value,
      this.movementValue.value,
      this.movementScope.value,
      this.movementDate.value,
      this.movementNotes.value
    );
    
    data.push(movement);

    this.reset();
  })