console.log('js is working');

let inputButton = document.querySelectorAll('#team button'),
    thebox = document.querySelector('#info-team'),
    currentBoxButton = null;


    function getboxData() {
        if (currentBoxButton === this) { 
            thebox.style.display = "none";
            currentBoxButton = null;
          } else {
            thebox.style.display = "block";
            thebox.querySelector('.ib-title').textContent = squad[this.dataset.member].title;
            thebox.querySelector('.ib-heading').textContent = squad[this.dataset.member].name;
            thebox.querySelector('.ib-text').textContent = squad[this.dataset.member].bio;
            currentBoxButton = this;
          }
    }

    inputButton.forEach(button => button.addEventListener('click', getboxData));

