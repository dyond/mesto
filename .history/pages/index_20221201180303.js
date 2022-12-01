let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')
let buttonSave = document.querySelector('.popup__form-button')

let name = document.querySelector('.popup__form-name').value
let job = document.querySelector('.popup__form-job').value

console.l

// let inputname = name.value
// let inputjob = job.value

// console.log(inputname, inputjob)

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


