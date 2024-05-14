const nurlanButton = document.querySelector('.nurlu');
const anarButton = document.querySelector('.anar');
const leylaButton = document.querySelector('.leyla');
const davudButton = document.querySelector('.davud');
const hemidButton = document.querySelector('.hemid');
const ramoButton = document.querySelector('.ramo');

let div = document.querySelector('.div')
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.display = 'flex'
div.style.position = 'center'
div.style.backgroundSize = 'cover'
div.style.width = '200px'
div.style.height = '200px'


let divHamisi = document.querySelectorAll('.div')
divHamisi.forEach(element => {
    element.style.margin = '10px'
});

nurlanButton.addEventListener('click', () => {
    div.style.background = 'url(bayram.jpeg)'
    div.style.backgroundSize = 'cover'
    div.style.position = 'center'
})
anarButton.addEventListener('click', () => {
    div.style.background = 'url(anar.jpeg)'
    div.style.backgroundSize = 'cover'
    div.style.position = 'center'
})
hemidButton.addEventListener('click', () => {
    div.style.background = 'url(ronaldo.jpeg)'
    div.style.backgroundSize = 'cover'
    div.style.position = 'center'
})
davudButton.addEventListener('click', () => {
    div.style.background = 'url(davud.jpeg)'
    div.style.backgroundSize = 'cover'
    div.style.position = 'center'
})
leylaButton.addEventListener('click', () => {
    div.style.background = 'url(leyla.jpeg)'
    div.style.backgroundSize = 'cover'
    div.style.position = 'center'
})
ramoButton.addEventListener('click', () => {
    div.style.background = 'url(babos.jpeg)'
    div.style.backgroundSize = 'cover'
    div.style.position = 'center'
})