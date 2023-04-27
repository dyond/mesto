export const buttonEdit = document.querySelector('.profile__info-edit');
export const buttonAdd = document.querySelector('.profile__info-add');

export const popupEdit = document.querySelector('.popup-edit');
export const popupAdd = document.querySelector('.popup-add');

export const formElementProfile = document.querySelector('.popup__form-profile');
export const formElementPlace = document.querySelector('.popup__form-place');
export const nameInput = document.querySelector('.popup__form-input_type_name');
export const jobInput = document.querySelector('.popup__form-input_type_job');
export const title = document.querySelector('.profile__info-title');
export const subtitle = document.querySelector('.profile__info-subtitle');
export const popupList = Array.from(document.querySelectorAll('.popup'));

export const formSettings = {
  formSelector: '.form',
  inputSelector: '.popup__form-input',
  inputErrorSelector: '.popup__input-error',
  inputErrorClass: 'popup__input-error_active',
  inputSectionSelector: '.form__section',
  submitSelector: '.popup__form-button',
  disabledButtonClass: 'popup__submit_disabled',
};