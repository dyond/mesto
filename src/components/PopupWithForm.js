import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitFormCallback }) {
    super(popupSelector);
    this._submitFormCallback = submitFormCallback;
    this._formElement = this._popupElement.querySelector('.popup__form-container');
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');
    this._submitButton = this._formElement.querySelector('.popup__form-button');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  submitForm() {
    this._submitFormCallback(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.close();
    });
  }

  close() {
    super.close();
    if (this._formElement !== null) {
      this._formElement.reset();
    }
  }
}
