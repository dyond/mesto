let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})

buttonClose.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})

let nameChange