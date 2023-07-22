let body = document.querySelector('body')

let container = document.createElement('div')
container.classList = 'container'

body.addEventListener('load', loadForm())
function loadForm() {
    let formLogin = `
    <div id="form" >
        <h4>NAME</h4>
        <input id="name" type="text">
        <br>
        <h4>AGE</h4>
        <input id="age" type="text">
        <br>
        <br>
        <br>
        <button id="btnForm">OK</button>
    </div>
            `
    body.insertAdjacentHTML('afterbegin', formLogin)
}

let form = document.querySelector('#form')
let btnForm = document.querySelector('#btnForm')

btnForm.addEventListener('click', () => {
    let Name = document.querySelector('#name').value
    let Age = document.querySelector('#age').value
    if (Name && Age) {
        form.style = `display:none;`
        body.appendChild(container)
        container.style = `visibility: visible; `
        asd()
    }
})

function template(indexIMG) {
    return `
    <div id="top">
        <img src="Images/${indexIMG}/test${indexIMG}.png" alt="">
    </div>
    <div id="buttom">
        <img class="image" src="Images/${indexIMG}/${indexIMG}-1.png" alt="">
        <img class="image" src="Images/${indexIMG}/${indexIMG}-2.png" alt="">
        <img class="image" src="Images/${indexIMG}/${indexIMG}-3.png" alt="">
        <img class="image" src="Images/${indexIMG}/${indexIMG}-4.png" alt="">
        <img class="image" src="Images/${indexIMG}/${indexIMG}-5.png" alt="">
        <img class="image" src="Images/${indexIMG}/${indexIMG}-6.png" alt="">
        </div>
        `
}
// این دوتا خط پایین زمانی باید به فانکشن بالا اضاف بشه که تعداد عکس ها تغییر گند
// <img class="image" src="Images/${indexIMG}/${indexIMG}-7.png" alt="">
// <img class="image" src="Images/${indexIMG}/${indexIMG}-8.png" alt="">

let javab = [3, 1, 5, 5, 2, 1, 2, 2, 2, 6, 4, 1, 4, 7, 2, 3, 1, 6, 5, 8, 4, 4, 7, 6, 4, 7, 7, 3, 2, 8]

container.addEventListener('click', asd)

let indexIMG = 0
function asd() {
    indexIMG += 1
    if (container != -1) {
        container.innerHTML = ''
    }
    container.insertAdjacentHTML('afterbegin', template(indexIMG))
}