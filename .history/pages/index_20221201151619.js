let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')
let buttonSave = document.querySelector('.popup__form-button')

const name = document.querySelector('.profile__name')
const job = document.querySelector('.profile__job')

console.log(name.placeholder , job.placeholder)
let inputn
console.log(name.value , job.value)

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})

buttonClose.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})


