let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let pop

button.addEventListener('click', function(){
  popup.hidden = ! popup.hidden
})