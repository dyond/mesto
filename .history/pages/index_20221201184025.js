let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')
let buttonSave = document.querySelector('.popup__form-button')

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})

buttonClose.addEventListener('click', function(){

  popup.hidden = !popup.hidden
})

buttonSave.addEventListener('click', function(){
  event.preventDefault();

  popup.hidden = !popup.hidden
})

let name = document.querySelector('.popup__form-name')
let job = document.querySelector('.popup__form-job')

console.log(name.value, job.value)




