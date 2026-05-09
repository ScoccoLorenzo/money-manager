async function initializePostCredentials() {
  const form = document.querySelector('.js-login-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dataToSend = new FormData(form);

    const request = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(dataToSend))
    });

    const data = await request.json();

    form.reset();
  })
}
initializePostCredentials()