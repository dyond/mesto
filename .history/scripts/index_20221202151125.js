let button = document.querySelector('.profile__info-button__edit')
let popup = document.querySelector('.popup')
let buttonClose = document.querySelector('.popup__close')
// let buttonSave = document.querySelector('.popup__form-button')
// let name = document.querySelector('.popup__form-name'); 
// let job = document.querySelector('.popup__form-job');
// let title = document.querySelector('.profile__info-title')
// let subtitle = document.querySelector('.profile__info-subtitle')

button.addEventListener('click', function(){
  popup.hidden = !popup.hidden

  // name.value = title.innerHTML
  // job.value = subtitle.innerHTML
})

buttonClose.addEventListener('click', function(){
  popup.hidden = !popup.hidden
})


// buttonSave.addEventListener('click', function(e){
//   e.preventDefault();

//   title.innerHTML = name.value
//   subtitle.innerHTML = job.value

//   popup.hidden = !popup.hidden
// })  

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


// Находим форму в DOM
let formElement = document.querySelector('.popup__form-container')
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-job');
let title = document.querySelector('.profile__info-title')
let subtitle = document.querySelector('.profile__info-subtitle')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    title.textContent = nameInput.value
    subtitle.textContent = jobInput.value
    popup.hidden = !popup.hidden
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 



