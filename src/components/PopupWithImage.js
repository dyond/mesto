import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupCaption = this._popupElement.querySelector('.popup__caption');
  }

  open(imageSrc, imageCaption) {
    this._popupImage.src = imageSrc;
    this._popupImage.alt = imageCaption;
    this._popupCaption.textContent = imageCaption;
    super.open();
  }
}
