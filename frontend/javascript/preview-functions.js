export function renderMovements(data, container) {
  let intermediateContainer = '';

  data.forEach((movement, index) => {
    intermediateContainer += `
      <form class="movement-display" method="post">
        <p>${movement.type}</p>
        <p>${movement.value / 100}€</p>
        <p>${movement.scope}</p>
        <p>${movement.date}</p>
        <p>${movement.notes}</p>
        <button type="button" class="delete-movement-button js-delete-movement-button" data-index="${index}">Delete</button>
        <button type="submit" data-index="${index}" class="submit-button js-submit-button">Submit</button>
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

export function initializeDeleteButtons(data, container, key, localStorageCallback){
  // inizializza i delete buttons
  document.querySelector('.movement-display-container')
    .addEventListener('click', (e) => {
      if (e.target.classList.contains('js-delete-movement-button')) {
        //elimina l'oggetto e renderizza le note
        const index = Number(e.target.dataset.index);
        data.splice(index, 1);
        renderMovements(data, container);
        localStorageCallback(key, data);
      }
    })
}

export function initializeSubmitMovement(data, container, key, localStorageCallback) {
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
      //console.log(completedRes) // success-not success
      data.splice(index, 1)
      renderMovements(data, container);
      localStorageCallback(key, data);

    } catch(err) {
      console.log(err)
    }
  })
}

export function storeMovementsInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export function uploadMovementsFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}