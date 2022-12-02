let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden

  nameInput.value = title.innerHTML
  jobInput.value = subtitle.innerHTML
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




function handleFormSubmit (evt) {
  evt.preventDefault();
  // 
  // 
  
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  popup.hidden = !popup.hidden
}

formElement.addEventListener('submit', handleFormSubmit); 



