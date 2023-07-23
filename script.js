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
        <input id="age" type="number">
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
        container.style = `visibility: visible;`
        addNewQuestionAndAnswer()
        localStorage.setItem('Name', Name)
    }
})

function template(indexIMG) {
    return `
    <div id="top">
        <img src="Images/${indexIMG}/test${indexIMG}.png" alt="">
    </div>
    <div id="buttom">
        <img class="image image1" src="Images/${indexIMG}/${indexIMG}-1.png" alt="">
        <img class="image image2" src="Images/${indexIMG}/${indexIMG}-2.png" alt="">
        <img class="image image3" src="Images/${indexIMG}/${indexIMG}-3.png" alt="">
        <img class="image image4" src="Images/${indexIMG}/${indexIMG}-4.png" alt="">
        <img class="image image5" src="Images/${indexIMG}/${indexIMG}-5.png" alt="">
        <img class="image image6" src="Images/${indexIMG}/${indexIMG}-6.png" alt="">
    </div>
    `
}

function template2(indexIMG) {
    return `
    <div id="top">
        <img src="Images/${indexIMG}/test${indexIMG}.png" alt="">
    </div>
    <div id="buttom">
        <img class="image image1" src="Images/${indexIMG}/${indexIMG}-1.png" alt="">
        <img class="image image2" src="Images/${indexIMG}/${indexIMG}-2.png" alt="">
        <img class="image image3" src="Images/${indexIMG}/${indexIMG}-3.png" alt="">
        <img class="image image4" src="Images/${indexIMG}/${indexIMG}-4.png" alt="">
        <img class="image image5" src="Images/${indexIMG}/${indexIMG}-5.png" alt="">
        <img class="image image6" src="Images/${indexIMG}/${indexIMG}-6.png" alt="">
        <img class="image image7" src="Images/${indexIMG}/${indexIMG}-7.png" alt="">
        <img class="image image8" src="Images/${indexIMG}/${indexIMG}-8.png" alt="">
    </div>
    `
}

let indexIMG = 0
function addNewQuestionAndAnswer() {
    if (container != -1) {
        container.innerHTML = ''
    }
    indexIMG += 1
    if (indexIMG <= 12) {
        container.insertAdjacentHTML('afterbegin', template(indexIMG))
    } else if (indexIMG <= 30) {
        container.insertAdjacentHTML('afterbegin', template2(indexIMG))
    } else if (indexIMG == 31) {
        container.insertAdjacentHTML('afterbegin', answer())

    }
}

let answers = [3, 1, 5, 5, 2, 1, 2, 2, 2, 6, 4, 1, 4, 7, 2, 3, 1, 6, 5, 8, 4, 4, 7, 6, 4, 7, 7, 3, 2, 8]

container.addEventListener('click', userChose)
let indexAnswer = -1
let score = 0
function userChose(e) {
    if (e.target.classList.contains('image')) {
        indexAnswer++
        if (e.target.classList.contains('image' + answers[indexAnswer])) {
            score += 1
        }
        addNewQuestionAndAnswer()
    }
}

function answer() {
    let nameInLs = localStorage.getItem('Name')
    score = (score*3.325).toFixed()
    return `
        <div class="container-score">
           <p>${nameInLs} answered ${score}% of the questions correctly</p>
           <p></p>
        </div>
    `
}