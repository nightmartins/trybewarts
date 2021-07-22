const emailInput = document.querySelector('#login');
const passwordInput = document.querySelector('#senha');
const loginButton = document.querySelector('#buttonLogin');

loginButton.addEventListener('click', () => {
  if (emailInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
