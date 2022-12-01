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

buttonSave.addEventListener('clock',function(){
  let first = document.getElementById('first').value

  document.getElementById('name').innerHTML= val;

  console.log(first)
})

// console.log(buttonSave)

