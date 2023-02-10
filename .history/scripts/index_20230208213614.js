const buttonEdit = document.querySelector('.profile__info-edit')
const buttonAdd = document.querySelector('.profile__info-add')

const formElementProfile = document.querySelector('.popup__form-profile')
const formElementPlace = document.querySelector('.popup__form-place')

const popup = document.querySelectorAll('.popup')

const buttonClose = document.querySelectorAll('.popup__close')

const nameInput = document.querySelector('.popup__form-input_type_name')
const jobInput = document.querySelector('.popup__form-input_type_job')

const placeInput = document.querySelector('.popup__form-input_type_place')
const linkInput = document.querySelector('.popup__form-input_type_link')

const title = document.querySelector('.profile__info-title')
const subtitle = document.querySelector('.profile__info-subtitle')


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

let popupContainer = document.querySelectorAll(".popup__container")

// Открытие и закрытие popup

function togglePopup(index){
  
  popup[index].classList.remove('hidden');
  setTimeout(function () {
    popup[index].classList.remove('visuallyhidden');
  }, 20);

  buttonClose[index].addEventListener( 'click', ()=> closePopup(index) );
}

buttonEdit.addEventListener( 'click', ()=> togglePopup(0) );
buttonAdd.addEventListener( 'click', ()=> togglePopup(1) );

function closePopup(index){

  popup[index].classList.add('visuallyhidden');    
  popup[index].addEventListener('transitionend', function(e) {
    popup[index].classList.add('hidden');
    }, {
    capture: false,
    once: true,
    passive: false
  });
}

// Обработка обновления профиля и добавления карточек

formElementProfile.addEventListener('submit', function (evt) {
  evt.preventDefault()
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  closePopup(0)
})

formElementPlace.addEventListener('submit', function (evt) {
  evt.preventDefault()
  initialCards.push({name : placeInput.value, link: linkInput.value})
  displayCard({name : placeInput.value, link: linkInput.value})    
  closePopup(1)
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

function displayCard({ name, link }){
  const placeElement = cardTemplate.querySelector(".card").cloneNode(true);
  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;

  // Открытие изображения 

  let imageClose = document.querySelector('.popup__image-close')
  let imageBlock = document.querySelector('.popup-block')

  let popupImage = document.querySelector('.popup__image')
  let popupCaption = document.querySelector('.popup__caption')

  imageClose.addEventListener('click',function(){

  imageBlock.classList.add('visuallyhidden');    
  imageBlock.addEventListener('transitionend', function(e) {
    imageBlock.classList.add('hidden');
    }, {
    capture: false,
    once: true,
    passive: false
  });

  })

  let cardImage = placeElement.querySelector(".card__image")
  let cardTitle = placeElement.querySelector(".card__title")

  cardImage.addEventListener('click', function(){
    imageBlock.classList.remove('hidden');
    setTimeout(function () {
      imageBlock.classList.remove('visuallyhidden');
    }, 20);

    // Получаем значание картинки и названия места
    let cardImageSrc = cardImage.src
    let cardTitleSrc = cardTitle.textContent

    popupImage.src = cardImageSrc
    popupCaption.textContent = cardTitleSrc
  })

  // Кнопка лайка
  let likeButton = placeElement.querySelector('.card__button')

  likeButton.addEventListener('click', function(){
    if (likeButton.querySelector('img').getAttribute('src') === 'images/vector_3.svg'){
      likeButton.querySelector('img').src = 'images/vector_4.svg'
    }else{
      likeButton.querySelector('img').src = 'images/vector_3.svg'
    }
  })

  // Кнопка удаления
  let deleteButton = placeElement.querySelector('.button__delete')

  deleteButton.addEventListener('click', function(){
    placeElement.remove()
  })



  cardContainer.prepend(placeElement);
}

display();