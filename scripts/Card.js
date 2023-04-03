import { openPopup } from './index.js';

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card");
    return cardTemplate.cloneNode(true);
  }

  _setEventListeners(cardElement) {
    const cardImage = cardElement.querySelector(".card__image");
    const likeButton = cardElement.querySelector(".card__button");
    const deleteButton = cardElement.querySelector(".button__delete");

    cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });

    likeButton.addEventListener("click", () => {
      this._handleLikeClick(likeButton);
    });

    deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(cardElement);
    });
  }

  _handleCardClick() {
    const imageBlock = document.querySelector('.popup-block')
    const popupImage = document.querySelector('.popup__image')
    const popupCaption = document.querySelector('.popup__caption')

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;

    openPopup(imageBlock);
  }

  _handleLikeClick(likeButton) {
    likeButton.classList.toggle("card__button_active");
  }

  _handleDeleteClick(cardElement) {
    cardElement.remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners(this._element);

    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;

    return this._element;
  }
}

export default Card;