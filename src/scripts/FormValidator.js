class FormValidator { 
  constructor(settings, form) { 
    this._form = form; 
    this._inputSelector = settings.inputSelector; 
    this._inputErrorSelector = settings.inputErrorSelector; 
    this._inputErrorClass = settings.inputErrorClass; 
    this._inputSectionSelector = settings.inputSectionSelector; 
    this._submitSelector = settings.submitSelector; 
    this._disabledButtonClass = settings.disabledButtonClass;
    this._submitElement = this._form.querySelector(this._submitSelector); 
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
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

  _enableButton() { 
    this._submitElement.removeAttribute('disabled'); 
    this._submitElement.classList.remove(this._disabledButtonClass); 
  } 

  disableButton() { 
    this._submitElement.setAttribute('disabled', 'true'); 
    this._submitElement.classList.add(this._disabledButtonClass); 
  } 

  _toggleButtonState() { 
    const formIsValid = this._inputs.every(inputElement => inputElement.validity.valid); 
    if (formIsValid) { 
      this._enableButton(); 
    } else { 
      this.disableButton(); 
    } 
  } 

  _setEventListeners() { 
    this._toggleButtonState(); 
    this._inputs.forEach(inputElement => { 
      inputElement.addEventListener('input', () => { 
        this._toggleInputState(inputElement); 
        this._toggleButtonState(); 
      }); 
    }); 
  } 



  enableValidation() { 
    this._setEventListeners(); 
  } 
} 

export { FormValidator };
