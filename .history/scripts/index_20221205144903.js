let button = document.querySelector('.profile__info-edit')
let popup = document.querySelector('.popup_opened')
let buttonClose = document.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form-container')
let nameInput = document.querySelector('.popup__input-form_type_job')
let jobInput = document.querySelector('.popup__input-form_type_job')
let title = document.querySelector('.profile__info-title')
let subtitle = document.querySelector('.profile__info-subtitle')
let body = document.querySelector('.root')

button.addEventListener('click', function(){
  popup.style.display = 'block';
  body.style.overflow = 'hidden'

  nameInput.value = title.innerHTML
  jobInput.value = subtitle.innerHTML
})

buttonClose.addEventListener('click', function(){
  popup.style.display = 'none';
  
  body.style.overflow = 'visible'
})

function handleFormSubmit (evt) {
  evt.preventDefault()

  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  popup.style.display = 'none';
  body.style.overflow = 'visible'
}

formElement.addEventListener('submit', handleFormSubmit); 

// let buttonsLike = document.querySelectorAll('.card__button')

// buttonsLike.forEach.call(buttonsLike,function(el){

//   el.addEventListener('click', function(){

//     if (el.querySelector('img').getAttribute('src') === 'images/vector_3.svg'){
//       el.querySelector('img').src = 'images/vector_4.svg'
//     }else{
//       el.querySelector('img').src = 'images/vector_3.svg'
//     }
//   })

// })







