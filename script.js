// const emailInput = document.getElementById('login');
// const passwordInput = document.getElementById('senha');
// const loginButton = document.getElementById('buttonLogin');
// const emailTrybe = 'tryber@tester.com';
// const senhaTrybe = '123456';

// loginButton.addEventListener('click', () => {
//   if (emailInput.value === 'tryber@tester.com' && passwordInput.value === '123456') {
//     alert('Olá, Tryber!');
//   } else {
//     alert('Login ou senha inválidos.');
//   }
// });

// function logarButton() {

//   if (emailInput.value === 'tryber@tester.com' && passwordInput.value === '123456') {
//     alert("Olá, Tryber!");
//   } else {
//     alert('Login ou senha inválidos.');
//   }
// };


// window.onload = function () {
//   const emailInput = document.getElementById('login');
//   const passwordInput = document.getElementById('senha');
//   const loginButton = document.getElementById('buttonLogin');
//   function logarButton() {

//     if (emailInput.value === 'tryber@tester.com' && passwordInput.value === '123456') {
//       alert("Olá, Tryber!");
//     } else {
//       alert('Login ou senha inválidos.');
//     }
//   };
//   loginButton.addEventListener('click', logarButton);
// }

window.onload = function () {
  const emailInput = document.getElementById('login');
  const passwordInput = document.getElementById('senha');
  const loginButton = document.getElementById('buttonLogin');
  const emailTrybe = 'tryber@tester.com';
  const senhaTrybe = '123456';

  loginButton.addEventListener('click', () => {
    if (emailInput.value == emailTrybe && passwordInput.value == senhaTrybe) {
      alert("Olá, Tryber!");
    } else {
      alert("Login ou senha inválidos.");
    }
  });
}
