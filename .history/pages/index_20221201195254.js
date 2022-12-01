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


buttonSave.addEventListener('click', function(e){
  e.preventDefault();
  
  let name = document.querySelector('.popup__form-name'); 
  let job = document.querySelector('.popup__form-job');

  document.querySelector('.profile__info-title').innerHTML = name.value
  document.querySelector('.profile__info-subtitle').innerHTML = job.value

  document.querySelector('.popup__form-name').value = "";
  document.querySelector('.popup__form-job').value = "";

  popup.hidden = !popup.hidden
})  


letlet buttonLike = document.getElementById('card__button-like')

let buttonLike = document.getElementById('card__button-like')

console.log(buttonLike)





