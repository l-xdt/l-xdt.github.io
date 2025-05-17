document.addEventListener('DOMContentLoaded', () => {
  const loggedIn = sessionStorage.getItem('loggedIn');

  if (loggedIn !== 'true') {

    window.location.href = '../index.html'; 
  }
});
