import { openPopup } from './index.js'; 

class Card { 
  constructor(data, templateSelector) { 
    this._name = data.name; 
    this._link = data.link; 
    this._templateSelector = templateSelector; 
    this._element = this._getTemplate(); // declare _element as a class field
    this._cardImage = this._element.querySelector(".card__image"); // declare _cardImage as a class field
    this._likeButton = this._element.querySelector(".card__button"); // declare _likeButton as a class field
    this._deleteButton = this._element.querySelector(".button__delete"); // declare _deleteButton as a class field
    this._setEventListeners(); // call _setEventListeners here, since we now have access to _cardImage, _likeButton, and _deleteButton
  } 

  _getTemplate() { 
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".card"); 
    return cardTemplate.cloneNode(true); 
  } 

  _setEventListeners() { 
    this._cardImage.addEventListener("click", () => { 
      this._handleCardClick(); 
    }); 

    this._likeButton.addEventListener("click", () => { 
      this._handleLikeClick(); 
    }); 

    this._deleteButton.addEventListener("click", () => { 
      this._handleDeleteClick(); 
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

  _handleLikeClick() { 
    this._likeButton.classList.toggle("card__button_active");
  } 

  _handleDeleteClick() { 
    this._element.remove(); 
    this._element = null; // set _element to null when deleting an instance of a class to free up memory
  } 

  createCard() { 
    this._cardImage.src = this._link; // update _cardImage.src with this._link
    this._cardImage.alt = this._name; // update _cardImage.alt with this._name
    this._element.querySelector(".card__title").textContent = this._name; 
    return this._element; 
  } 
} 

export default Card;
