let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')
let buttonSave = document.querySelector('.popup__form-button')

const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')

let inputname = name.value
let inputjob = job.value

console.log( inputname, inputjob )

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})

buttonClose.addEventListener('click', function(){

  popup.hidden = !popup.hidden
})

buttonSave.addEventListener('click', function(){

  popup.hidden = !popup.hidden
})

