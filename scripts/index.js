import { FormValidator } from './FormValidator.js';
import Card from './Card.js';
import {initialCards} from './cards.js'

const formSettings = {
  formSelector: '.form',
  inputSelector: '.popup__form-input',
  inputErrorSelector: '.popup__input-error',
  inputErrorClass: 'popup__input-error_active',
  inputSectionSelector: '.form__section',
  submitSelector: '.popup__form-button',
  disabledButtonClass: 'popup__submit_disabled',
};

const buttonEdit = document.querySelector('.profile__info-edit')
const popupEdit = document.querySelector('.popup-edit') 

const buttonAdd = document.querySelector('.profile__info-add')
const popupAdd = document.querySelector('.popup-add')

const formElementProfile = document.querySelector('.popup__form-profile')
const formElementPlace = document.querySelector('.popup__form-place')

const nameInput = document.querySelector('.popup__form-input_type_name')
const jobInput = document.querySelector('.popup__form-input_type_job')

const title = document.querySelector('.profile__info-title')
const subtitle = document.querySelector('.profile__info-subtitle')

const popupList = Array.from(document.querySelectorAll('.popup')); 

// Form validation
const formValidatorProf = new FormValidator(formSettings, formElementProfile);
formValidatorProf.enableValidation();

const formValidatorPlace = new FormValidator(formSettings, formElementPlace);
formValidatorPlace.enableValidation();

// Open popup function
export function openPopup(popup){
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
}

// Close popup function
function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc);
}

// Tracking the closure with the ESC
function closePopupEsc(evt){
  if(evt.key === 'Escape'){
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

// Tracking the closure with the mouse
popupList.forEach((popup) => { 
  popup.addEventListener('mousedown', (event) => { 
    const targetClassList = event.target.classList; 
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-image')) {
      closePopup(popup);
    }
  })
}) 

// Open profile popup
buttonEdit.addEventListener('click', function(){
  nameInput.value = title.textContent
  jobInput.value = subtitle.textContent
  openPopup(popupEdit)
})

// Open add card popup
buttonAdd.addEventListener('click', () => openPopup(popupAdd))

const cardContainer = document.querySelector(".cards");
const cardTemplateSelector = "#card-template";


function display() {
  initialCards.forEach(function (el) {
    const card = new Card(el, cardTemplateSelector);
    cardContainer.prepend(card.createCard());
  });
}

function addCard(name, link) {
  const card = new Card({ name: name, link: link }, cardTemplateSelector);
  cardContainer.prepend(card.createCard());
}


// Changing profile function
function handleFormSubmitProf(evt){
  evt.preventDefault()
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  closePopup(popupEdit)
}

formElementProfile.addEventListener("submit", handleFormSubmitProf)


const submitAddButton = document.querySelector('.popup__form-button');

// Add card function
function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  const placeInput = document.querySelector('.popup__form-input_type_place');
  const linkInput = document.querySelector('.popup__form-input_type_link');

  const name = placeInput.value;
  const link = linkInput.value;

  addCard(name, link);
  closePopup(popupAdd);
  const formValidatorPlace = new FormValidator(formSettings, formElementPlace);
  formValidatorPlace.toggleButtonState(submitAddButton);
  formElementPlace.reset();
}

formElementPlace.addEventListener("submit", handleFormSubmitPlace);

display();
