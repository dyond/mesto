// Importing classes and data
import './index.css'

import { FormValidator } from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import { initialCards } from '../scripts/cards.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import { buttonEdit, buttonAdd, formElementProfile, formElementPlace, nameInput, jobInput, formSettings } from '../utils/constants.js';

// Form validation
const formValidatorProf = new FormValidator(formSettings, formElementProfile);
formValidatorProf.enableValidation();
const formValidatorPlace = new FormValidator(formSettings, formElementPlace);
formValidatorPlace.enableValidation();

// Open profile popup
const profilePopup = new Popup('.popup-edit');
buttonEdit.addEventListener('click', () => profilePopup.open());

// Open add card popup
const addCardPopup = new Popup('.popup-add');
buttonAdd.addEventListener('click', () => addCardPopup.open());

// Setting card container and template selector
const cardContainer = document.querySelector('.cards');
const cardTemplateSelector = '#card-template';

function createCard(name, link, handleCardClick) {
  const card = new Card({ name: name, link: link }, cardTemplateSelector, handleCardClick);
  return card.createCard();
}

// Creating a new instance of the Section class for the initial cards
const initialCardsSection = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = createCard(cardData.name, cardData.link, () => {
      const popupWithImage = new PopupWithImage('.popup__image');
      popupWithImage.open(cardData.name, cardData.link);
    });
    return cardElement;
  }
}, '.cards');

// Displaying initial cards
initialCardsSection.renderItems();

// Adding new card
const addCardForm = document.querySelector('.popup__form_place'); 
const addCardPopupWithForm = new PopupWithForm('.popup-add', {
  submitFormCallback: (formData) => {
    addCard(formData.place, formData.link);
  }
}, addCardForm);

addCardPopupWithForm.setEventListeners();

function addCard(name, link) {
  const card = new Card({ name: name, link: link }, cardTemplateSelector, () => {
    const popupWithImage = new PopupWithImage('.popup__image');
    popupWithImage.open(name, link);
  });
  cardContainer.prepend(card.createCard());
}

// Changing profile information
const userInfo = new UserInfo({
  nameSelector: '.profile__info-title',
  infoSelector: '.profile__info-subtitle'
});

function handleFormSubmitProf(evt) {
  evt.preventDefault();
  const userData = userInfo.getUserInfo();
  userInfo.setUserInfo({ ...userData, name: nameInput.value, info: jobInput.value });
  profilePopup.close();
}

formElementProfile.addEventListener('submit', handleFormSubmitProf);

// Selecting the submit button for adding a new card
const submitAddButton = document.querySelector('.popup__form-button');

// Add card function
function handleFormSubmitPlace(evt) {
  evt.preventDefault();

  addCardPopupWithForm.submitForm();
  addCardPopupWithForm.close();
}

formElementPlace.addEventListener("submit", handleFormSubmitPlace);

// Set event listeners for popups
profilePopup.setEventListeners();
addCardPopup.setEventListeners();
