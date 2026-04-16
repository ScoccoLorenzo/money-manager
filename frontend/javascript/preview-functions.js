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
        <button type="submit" data-index="${index}" class="js-submit-button">Submit</button>
      </form>
      `
    })
    container.innerHTML = intermediateContainer;
}

export function initializeMovementsDisplay(data, container) {
  // crea la preview dei movimenti
  document.querySelector('.movement-form')
    .addEventListener('submit', function(e) {
      e.preventDefault();

      renderMovements(data, container);
    })
}

export function initializeDeleteButtons(data, container){
  // inizializza i delete buttons
  document.querySelector('.movement-display-container')
    .addEventListener('click', (e) => {
      if (e.target.classList.contains('js-delete-movement-button')) {
        //elimina l'oggetto e renderizza le note
        const index = Number(e.target.dataset.index);
        data.splice(index, 1);
        renderMovements(data, container);
      }
    })
}

export function initializeSubmitMovement(data, container) {
  container.addEventListener('submit', async function(e) {
    e.preventDefault();
    //dati da inviare
    const index = Number(e.submitter.dataset.index)
    const movementToPost = data[index]

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movementToPost)
      })

      const completedRes = await res.json()
      console.log(completedRes) // success-not success
      data.splice(index, 1)
      renderMovements(data, container);

    } catch(err) {
      console.log(err)
    }
  })
}