let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let popu

button.addEventListener('click', function(){
  popup.hidden = ! popup.hidden
})