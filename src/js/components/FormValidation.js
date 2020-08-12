export default class FormValidator {
  constructor(form, errorMessage, submitExecution) {
    this.form = form
    this.errorMessage = errorMessage;
    this.submitExecution = submitExecution;
  }

  init() {
    this.button = this.form.querySelector('.search__button');
    this.allInputsArray = Array.from(this.form.elements).filter((el) => {
      return el.tagName.toLowerCase() === 'input';
    });
    this.errorElementsArray = this.form.querySelectorAll('.search__form-error');
    this._setEventListeners();
  }

  /*  Валидация инпутов и вывод кастомной ошибки  */

  validateFormInput() {
    this.errorElementsArray.forEach((el) => {
      if (el.id === `${this.input.id}-error`) {
        this.errorElement = el;
      }
    });

    if (this.input.validity.valueMissing) {
      this.input.setCustomValidity(this.errorMessage.required)
      this.errorElement.textContent = this.input.validationMessage;
    } else if ((this.input.validity.tooShort || this.input.validity.tooLong) && this.input.type === 'text') {
      this.input.setCustomValidity(this.errorMessage.lenghtString)
      this.errorElement.textContent = this.input.validationMessage;
    } else if (this.input.validity.patternMismatch) {
      this.input.setCustomValidity(this.errorMessage.pattern)
      this.errorElement.textContent = this.input.validationMessage;
    } else {
      this.errorElement.textContent = this.input.setCustomValidity('');
    }

  }

  /*  Активация деактивация кнопки в зависиммости от валидности формы  */

  validateFormButton() {

    if (this.resultСhecking === false) {
      this.buttonSubmitDisable();
    } else {
      this.buttonSubmitEnable();
    }

  }

  /*  Валидация формы  */

  validateForms() {

    if (this.input != null) {
      this.validateFormInput(this.input);
    }
    this.resultСhecking = this.allInputsArray.every(elem => elem.validity.valid);
    this.validateFormButton(this.button, this.resultСhecking);

  }

  /*  Активация кнопки submit  */

  buttonSubmitEnable() {
    this.button.removeAttribute('disabled');
    this.button.classList.remove('search__button_disabled');
  }

  /*  Деактивация кнопки submit  */

  buttonSubmitDisable() {
    this.button.setAttribute('disabled', true);
    this.button.classList.add('search__button_disabled');
  }

  /*  Установка слушателей на input и на submit  */

  _setEventListeners() {

    this.form.addEventListener('input', (event) => {
      this.input = event.target;
      this.validateForms();
    });

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.searchValue = this.form.elements.text.value;
      this.submitExecution(this.searchValue);
    });

  }

  /*  Сброс формы (если потребуется)  */

  resetForms() {

    this.allInputsArray.forEach((item) => {
      item.setCustomValidity('')
    });
    this.errorElementsArray.forEach((item) => {
      item.textContent = ""
    });
    this.form.reset();
    this.input = null;

  }

}