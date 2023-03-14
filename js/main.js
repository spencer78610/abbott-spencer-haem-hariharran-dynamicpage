console.log('js is working');

let inputButton = document.querySelectorAll('#team button'),
    thebox = document.querySelector('#info');

    function getboxData() {
        // thebox.querySelector('#info-team').textContent
        thebox.querySelector('.ib-heading').textContent = squad[this.dataset.member].name,
        thebox.querySelector('.ib-text').textContent = squad[this.dataset.member].bio;

        // debugger;
    }

    inputButton.forEach(button => button.addEventListener('click', getboxData));