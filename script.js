const emailInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');
const loginButton = document.getElementById('buttonLogin');
// const emailTrybe = 'tryber@tester.com';
// const senhaTrybe = '123456';

loginButton.addEventListener('click', () => {
  if (emailInput.value === 'tryber@tester.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// function logarButton() {
//   if (emailInput.value == 'tryber@tester.com' && passwordInput.value == '123456') {
//     alert("Olá, Tryber!");
//   } else {
//     alert('Login ou senha inválidos.');
//   }
// };
// // logarButton();

// loginButton.addEventListener('click', logarButton);
