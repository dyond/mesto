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

const popupList = Array.from(document.querySelectorAll('.popup')); 

const options = {
  formSelector: '.form',
  submitSelector: '.popup__form-button',
  inputSelector: '.popup__form-input',
  inputSectionSelector: '.form__section',
  inputErrorSelector: '.popup__input-error',
  inputErrorClass: 'popup__input-error_active',
  disabledButtonClass: 'popup__submit_disabled',
}

// Функция открытия popup окон
function openPopup(popup){
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}

function closePopupEsc(evt){
  if(evt.key === 'Escape'){
    popupList.forEach((el) => closePopup(el))
  }
}

popupList.forEach((popup) => { 
  popup.addEventListener('mousedown', (event) => { 
    const targetClassList = event.target.classList; 
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close')) {
      closePopup(popup);
    }
  })
}) 

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
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc);
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
  closePopup(popupEdit)
})



const submitAddButton = popupAdd.querySelector('.popup__form-button')

formElementPlace.addEventListener('submit', function (evt) {
  evt.preventDefault()
  displayCard(createCard({name : placeInput.value, link: linkInput.value}))
  closePopup(popupAdd)
  disableButton(submitAddButton, options.disabledButtonClass)
  evt.target.reset()
})


// --------------------------------------

const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;

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


function displayCard (el){
  cardContainer.prepend(el);
}

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
    likeButton.classList.toggle('card__button_active')
  })

  // Кнопка удаления
  const deleteButton = placeElement.querySelector('.button__delete')

  deleteButton.addEventListener('click', function(){
    placeElement.remove()
  })

  return placeElement
}

display();

enableValidation(options)
