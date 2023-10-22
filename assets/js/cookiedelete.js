// cookies delete

const deleteCookieButton = document.querySelector('.cookie-cancel'); 

deleteCookieButton.addEventListener('click', () => {

  // Recupera tutti i cookie
  const cookies = document.cookie.split(';');

  // Cicla su tutti i cookie
  for (let i = 0; i < cookies.length; i++) {

    // Splitta il cookie per recuperare solo il nome
    const cookieName = cookies[i].split('=')[0];

    // Cancella il cookie impostando una data di scadenza passata
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

  }

  location.reload();
});