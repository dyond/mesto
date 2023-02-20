const buttonEdit = document.querySelector('.profile__info-edit')
const popupEdit = document.querySelector('.popup-edit') 

const buttonAdd = document.querySelector('.profile__info-add')
const popupAdd = document.querySelector('.popup-add')

const formElementProfile = document.querySelector('.popup__form-profile')
const formElementPlace = document.querySelector('.popup__form-place')

const closeBtns = document.querySelectorAll('.popup__close')

const nameInput = document.querySelector('.popup__form-input_type_name')
const jobInput = document.querySelector('.popup__form-input_type_job')

const placeInput = document.querySelector('.popup__form-input_type_place')
const linkInput = document.querySelector('.popup__form-input_type_link')

const title = document.querySelector('.profile__info-title')
const subtitle = document.querySelector('.profile__info-subtitle')


const imageClose = document.querySelector('.popup__image-close')
const imageBlock = document.querySelector('.popup-block')

const popupImage = document.querySelector('.popup__image')
const popupCaption = document.querySelector('.popup__caption')

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

// Функция открытия popup окон
function openPopup(popup){
  popup.classList.add('popup_opened')
}

// Окрытие редактирования профиля
buttonEdit.addEventListener('click', function(){
  nameInput.value = title.textContent
  nameInput.placeholder = title.textContent

  jobInput.value = subtitle.textContent
  jobInput.placeholder = subtitle.textContent

  openPopup(popupEdit)
})

// Открытие доавления поста
buttonAdd.addEventListener('click', () => openPopup(popupAdd))

// Функция закрытия popup окон
function closePopup(popup) {
  // popup.classList.add('popup_fade')

  popup.classList.remove('popup_opened')
  // setTimeout(function(){
  //   popup.classList.remove('popup_opened')
  //   popup.classList.remove('popup_fade')
  // }, 500)
  
}

closeBtns.forEach((button) => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup))
});

// Обработка обновления профиля и добавления карточек
formElementProfile.addEventListener('submit', function (evt) {
  evt.preventDefault()
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  const popup = formElementProfile.closest('.popup')
  closePopup(popup)
})

formElementPlace.addEventListener('submit', function (evt) {
  evt.preventDefault()
  displayCard(createCard({name : placeInput.value, link: linkInput.value}))
  const popup = formElementPlace.closest('.popup')
  closePopup(popup)
  evt.target.reset()
})


// --------------------------------------

const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;
// НА КАЖДЫЙ ВОЗВРАТ ВЫЗЫВАЕТ ФУНКЦИЮ createCard
function display() {
  // displayCards.forEach(createCard);
  initialCards.forEach(function (el) {
    displayCard(createCard(
      {
       name: el.name,
      link: el.link 
      }

    ))
  })
}

// ДОБАВЛЯЕТ ЭЛЕМЕНТ В НАЧАЛО КОНТЕЙНЕРА
function displayCard (el){
  cardContainer.prepend(el);
}

// сОЗДАЕТ И ВОЗВРАЩАЕТ КАРТОЧК
function createCard({ name, link }){
  const placeElement = cardTemplate.querySelector(".card").cloneNode(true);

  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;
  placeElement.querySelector(".card__image").alt = name;

  // Открытие изображения 
  const cardImage = placeElement.querySelector(".card__image")
  const cardTitle = placeElement.querySelector(".card__title")

  cardImage.addEventListener('click', function(){
    openPopup(imageBlock)
    
    popupImage.src = cardImage.src
    popupImage.alt = cardTitle.textContent
    popupCaption.textContent = cardTitle.textContent
  })

  // Кнопка лайка
  const likeButton = placeElement.querySelector('.card__button')
  
  likeButton.addEventListener('click', function(){
    if (likeButton.classList.contains('card__button_active')){
      likeButton.classList.remove('card__button_active')
    } else{
      likeButton.classList.add('card__button_active')
    }
  })

  // Кнопка удаления
  const deleteButton = placeElement.querySelector('.button__delete')

  deleteButton.addEventListener('click', function(){
    placeElement.remove()
  })
  // displayCard(placeElement)

  return placeElement
}

display();