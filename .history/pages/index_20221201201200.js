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

let buttonsLike = document.querySelectorAll('.card__button')

buttonsLike.forEach.call(buttonsLike,function(el){

  el.addEventListener('click', function(){

    if (el.querySelector('.card__button-like').src === 'images/vector_3.svg'){
      console.log('asdasd')
    }
    // console.log(el.querySelector('.card__button-like').src)

    el.querySelector('.card__button-like').src = 'images/vector_4.svg'

  })

})




