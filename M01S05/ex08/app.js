let button = document.getElementById('clicker');
let RemoveEventButton = document.getElementById('RemoveEventButton')
let queryButton = document.getElementById('query');
let age = 0;
let messageParagraph = document.getElementById('message');
const clickHandler = () => {
    alert('Am apasat butonul');
}

button.addEventListener('click', clickHandler)
RemoveEventButton.addEventListener('click', () => {
    button.removeEventListener('click', clickHandler)
});
queryButton.addEventListener('click', () => {
   age = prompt('Introdu varsta: ');
   let message = `Ai ${age} ani.`;
    messageParagraph.innerText = message;
});