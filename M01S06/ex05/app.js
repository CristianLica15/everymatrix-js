(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let showButton = document.querySelector('#showButton');
        let toggleEventButton = document.querySelector('#toggleEventButton');
        let removeButtons = document.querySelector('#removeButtons');
        let eventBound = true;
        const showAlert = () => {
            alert('Butonul a fost apasat');
        }

        const addMessage = () => {
            let p = document.createElement('p')

            if(eventBound) {
                p.innerText = 'Alerta va fi afisata'
            } else
            {
                p.innerText = 'Alerta nu va fi afisata';
            }

            document.body.appendChild(p);
        }
        removeButtons.addEventListener('click', () => {
            if(!confirm('Esti sigur ca vrei sa stergi butoanele?')) {
                return;
                
            }

          if(eventBound) {
              showButton.removeEventListener('click', showAlert)
          }  

          showButton.remove()
          toggleEventButton.remove();
          removeButtons.remove()
        })
        showButton.addEventListener('click', showAlert)

        toggleEventButton.addEventListener('click', function (evt) {
            if (eventBound) {
                showButton.removeEventListener('click', showAlert);
                eventBound = false;
                evt.target.innerText = 'porneste salamu.'
            } else {
                showButton.addEventListener('click', showAlert);
                eventBound = true;
                evt.target.innerText = 'opreste salamu'
            }

            addMessage();
        });
    });
})();