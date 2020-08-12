export default class CommitCardList {

  constructor(container) {
    this.container = container;
  }

  /*  Добавляет карточку в разметку  */

  _addCard(card) {
    this._card = card;
    this.container.appendChild(this._card.cardElement);
  }

  /*  Рендерит карточки  */

  render(array) {
    this.cardArray = array;
    this.cardArray.forEach(item => {
      this._addCard(item);
    });
  }

}