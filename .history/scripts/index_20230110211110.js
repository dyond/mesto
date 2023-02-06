let buttonEdit = document.querySelector('.profile__info-edit')
let buttonAdd = document.querySelector('.profile__info-add')
let popupBtn = document.querySelectorAll('.button')

let popup = document.querySelectorAll('.popup_opened')

let popupTitle = document.querySelector('.popup__form-title')

let popupEdit = document.querySelector('.popup-edit')
let popupAdd = document.querySelector('.popup-add')

let buttonClose = document.querySelectorAll('.popup__close')

let formElement = document.querySelectorAll('.popup__form-container')

let nameInput = document.querySelector('.popup__form-input_type_name')
let jobInput = document.querySelector('.popup__form-input_type_job')

let placeInput = document.querySelector('.popup__form-input_type_place')
let linkInput = document.querySelector('.popup__form-input_type_link')

let title = document.querySelector('.profile__info-title')
let subtitle = document.querySelector('.profile__info-subtitle')

let body = document.querySelector('.root')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Открытие и закрытие popup 

function openPopup(i){

  if(i === 1) {
    placeInput.value = ''
    linkInput.value = ''
  }

  popup[i].style.display = 'block'
  body.style.overflow = 'hidden'
  closePopup(i)
}

function closePopup(i){
  buttonClose.forEach.call(buttonClose, function(el){
    el.addEventListener('click', function(){
      popup[i].style.display = 'none'
      body.style.overflow = 'visible'
      if ( i === 0){
        nameInput.value = title.textContent
        jobInput.value = subtitle.textContent
      }
    })
  })
}

popupBtn.forEach.call(popupBtn,function(el,i){
  el.addEventListener('click', function(){
    openPopup(i)
  })
})

// --------------------------------------

const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;

const createCard = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function display() {
  createCard.forEach(displayCard);
}

function displayCard({ name, link }) {
  const placeElement = cardTemplate.querySelector(".card").cloneNode(true);
  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;

  cardContainer.prepend(placeElement);
}

display();


// --------------------------------------

// Добавление карточки в массив

formElement.forEach.call(formElement,function(el, i){
  el.addEventListener('submit', function(evt){
    evt.preventDefault()

    if ( i === 0 ){
      title.textContent = nameInput.value
      subtitle.textContent = jobInput.value

    }else if (( placeInput.value != '') || ( linkInput.value != '')){

      initialCards.push({name : placeInput.value, link: linkInput.value})
      console.log('succesfully added')
      display()

      // console.log(placeInput.value, linkInput.value)
      // console.log(initialCards[initialCards.length - 1].name, initialCards[initialCards.length - 1].link)
      // addCard(placeInput.value, linkInput.value)
      // addCard(initialCards[initialCards.length - 1].name, initialCards[initialCards.length - 1].link)
      
    }

    popup[i].style.display = 'none'
    body.style.overflow = 'visible'   
  })  
})



// ------------------------
// Добавление карточек 

// находим контейнер для карточек и создаем макет карточки
// let cards = document.querySelector('.cards')
// let cardTemplate = document.querySelector('#card-template').content

// Функция добавления карточки, сначала копируем макет, затем находит теги img и h2 и меняем их значения, добовляя в конец списка

// function addCard(name , link){
//   let cardTemplateClone = cardTemplate.querySelector('.card').cloneNode(true)
//   cardTemplateClone.querySelector('.card__title').textContent = name
//   cardTemplateClone.querySelector('.card__image').src = link
//   cards.prepend(cardTemplateClone)
// }

// Функция отображения карточки, перебираем каждый элемент массива initialCards и вызываем на него функцию addCard
// function display(){
//   initialCards.forEach(addCard)
// }

// display()

// Сектор для кнопки лайка

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







