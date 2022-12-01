let button = document.querySelector('.profile__info-button__edit')

button.addEventListener('click', function(e){
  let div = document.querySelector('.popup')

  
  div.style.display = div.style.display === 'none' ? 'block' : 'none'
})