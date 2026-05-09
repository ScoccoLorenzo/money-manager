export function initializeSaveMovement(object, data, key, localStorageCallback) {
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
      
      data.push(movement);
      localStorageCallback(key, data);
      this.reset();
    })
}