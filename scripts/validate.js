class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._inputErrorSelector = settings.inputErrorSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._inputSectionSelector = settings.inputSectionSelector;
    this._submitSelector = settings.submitSelector;
    this._disabledButtonClass = settings.disabledButtonClass;
  }

  _hiddenError(errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove(this._inputErrorClass);
  }

  _showError(inputElement, errorElement, message) {
    errorElement.textContent = message;
    errorElement.classList.add(this._inputErrorClass);
  }

  _toggleInputState(inputElement) {
    const isValid = inputElement.validity.valid;
    const sectionElement = inputElement.closest(this._inputSectionSelector);
    const errorElement = sectionElement.querySelector(this._inputErrorSelector);
    if (isValid) {
      this._hiddenError(errorElement);
    } else {
      this._showError(inputElement, errorElement, inputElement.validationMessage);
    }
  }

  _hiddenErrorForInput(inputElement) {
    const sectionElement = inputElement.closest(this._inputSectionSelector);
    const errorElement = sectionElement.querySelector(this._inputErrorSelector);
    this._hiddenError(errorElement);
  }

  _enableButton(buttonElement) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(this._disabledButtonClass);
  }

  _disableButton(buttonElement) {
    buttonElement.setAttribute('disabled', 'true');
    buttonElement.classList.add(this._disabledButtonClass);
  }

  _toggleButtonState(inputs, submitElement) {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);
    if (formIsValid) {
      this._enableButton(submitElement);
    } else {
      this._disableButton(submitElement);
    }
  }

  _setEventListeners() {
    const submitElement = this._form.querySelector(this._submitSelector);
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._toggleButtonState(inputs, submitElement);
    inputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState(inputs, submitElement);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export function disableButton(button) {
  button.classList.add('popup__submit_disabled');
  button.setAttribute('disabled', 'true');
}

export { FormValidator };
