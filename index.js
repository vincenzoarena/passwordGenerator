const password = document.getElementById("password");
function genPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}

const bodyMods = document.querySelector('body');
bodyMods.style.background = 'tomato';
bodyMods.style.fontFamily = 'Helvetica';
bodyMods.style.display = 'flex';
bodyMods.style.justifyContent = 'center';
bodyMods.style.alignItem = 'center';

const boxPasswordGenerator = document.querySelector('.box');
boxPasswordGenerator.style.background = 'white';
boxPasswordGenerator.style.width = '25em';
boxPasswordGenerator.style.padding = '2.5em';
boxPasswordGenerator.style.display = 'flex';
boxPasswordGenerator.style.justifyContent = 'center';
boxPasswordGenerator.style.alignItem = 'center';
boxPasswordGenerator.style.flexDirection= 'column';
boxPasswordGenerator.style.marginTop = '7em';

const title = document.querySelector('h2');
title.style.textAlign = 'center'
title.style.fontSize = '2.5em';

const passwordField = document.querySelector('#password');
passwordField.style.display = 'flex';
passwordField.style.justifyContent = 'center';
passwordField.style.alignItem = 'center';
passwordField.style.fontSize = '1.5em';
passwordField.style.textAlign = 'center';

const buttonsArea = document.querySelector('.actions');
buttonsArea.style.display = 'flex';
buttonsArea.style.justifyContent = 'space-around';
buttonsArea.style.alignItem = 'center';
buttonsArea.style.margin = '2.5em'

const buttons = document.querySelectorAll('#button');
items.forEach((button, i) => {
    button.style.backgroundColor = 'red';
});