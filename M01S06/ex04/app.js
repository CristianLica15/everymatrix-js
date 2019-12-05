(() => {
document.addEventListener('DOMContentLoaded', () => {
let stage = document.querySelector('.stage');
const showMessage = (message) => {
    let p = document.createElement('p');
    p.innerText = 'Vreau javascript!'
    p.classList.add('message');

    document.body.appendChild(p);
   
    setTimeout(() => {
        p.remove()
    },1000);
}

stage.addEventListener('mouseover', () => {
  showMessage('Javascript')
})
stage.addEventListener('mouseout', () => {
    showMessage(' No Javascript')

})
});
})();
