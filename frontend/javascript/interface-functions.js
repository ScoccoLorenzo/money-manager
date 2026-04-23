export function initializeSaveMovement(object, memory) {
  // crea un Movement e salva l'oggetto dentro memory quando clicco submit
  document.querySelector('.movement-form')
    .addEventListener('submit', function(e) {
      e.preventDefault();
      const movementType = document.querySelector('[name="movement-type"]');
      const movementScope = document.querySelector('[name="movement-scope"]');

      const movement = new object(
        movementType.value,
        this.movementValue.value,
        movementScope.value,
        this.movementDate.value,
        this.movementNotes.value
      );
      
      memory.push(movement);
      //console.log(memory);
      this.reset();
    })
}