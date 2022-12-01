let button = document.querySelector('.profile__info-button__edit')

console.log(button)

button.addEventListener('click', function(e){
  var div = document.querySelector('div')
  div.style.display = div.style.display === 'none' ? 'block' : 'none'
})