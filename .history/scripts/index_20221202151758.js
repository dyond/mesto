let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden

  name.value = title.innerHTML
  job.value = subtitle.innerHTML
})

buttonClose.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})



let buttonsLike = document.querySelectorAll('.card__button')

buttonsLike.forEach.call(buttonsLike,function(el){

  el.addEventListener('click', function(){

    if (el.querySelector('img').getAttribute('src') === 'images/vector_3.svg'){
      el.querySelector('img').src = 'images/vector_4.svg'
    }else{
      el.querySelector('img').src = 'images/vector_3.svg'
    }
  })

})



let formElement = document.querySelector('.popup__form-container')
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-job');
let title = document.querySelector('.profile__info-title')
let subtitle = document.querySelector('.profile__info-subtitle')

function handleFormSubmit (evt) {
  evt.preventDefault();
  // nameInput.value = title.innerHTML
  // jobInput.value = subtitle.innerHTML
  
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  popup.hidden = !popup.hidden
}

formElement.addEventListener('submit', handleFormSubmit); 


