const header = document.querySelector('header');
const body = document.querySelector('body');
const attr = document.querySelector('.attribution');
const gridCard = document.querySelectorAll('.grid-card')
const switchBtn = document.querySelector('.switch');
const input = document.querySelector('.checkbox');

const toggleColor = () => {
    if(input.checked == true) {
        header.classList.toggle('light');
        body.classList.toggle('light');
       
        Array.from(gridCard).forEach(e => e.classList.add('white-bg'))
    } else {
        Array.from(gridCard).forEach(e => e.classList.remove('white-bg'))
    }
    attr.classList.toggle('light');
}

switchBtn.addEventListener('click', toggleColor)
