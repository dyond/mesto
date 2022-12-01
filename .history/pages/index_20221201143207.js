let button = document.querySelector('.profile__info-button__edit')

console.log(button)

button.addEventListener('click', function(e){
  let div = document.querySelector('.p')
  div.style.display = div.style.display === 'none' ? 'block' : 'none'
})