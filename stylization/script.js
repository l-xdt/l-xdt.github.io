 document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});




 document.addEventListener('DOMContentLoaded', () => {
  const signInBtn = document.getElementById('signIn');

  const encodedCreds = [
    { u: 'Z3VydA==', p: 'Z3VydA==' },     
    { u: 'YXZ1bg==', p: 'bTRyNG54' },                  
    { u: 'Z3Vlc3Q=', p: 'Z3Uzc3Qh'}            
  ];

  function decode(str) {
    return atob(str);
  }

  signInBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const valid = encodedCreds.some(encodedCreds =>
      decode(encodedCreds.u) === username && decode(encodedCreds.p) === password
    );

    if (valid) {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'main/index.html';
    } else {

              const toggleRightH1 = document.querySelector('.toggle-right h1');
              const toggleRightP = document.querySelector('.toggle-right p');

    if (toggleRightH1 && toggleRightP) {

      toggleRightH1.textContent = "Invalid Credentials";
      toggleRightP.textContent = "Invalid credentials, please enter the proper credentials \nto gain acess.";

      toggleRightH1.classList.add('fade');
      toggleRightP.classList.add('fade');

      setTimeout(() => {
        toggleRightH1.textContent = "Welcome To \nLeidenschaft Tech.";
        toggleRightP.textContent = "Sign in With Username to Gain Access.";
        toggleRightH1.classList.remove('fade');
        toggleRightP.classList.remove('fade');
      }, 4500);
    }
  }
  });
});