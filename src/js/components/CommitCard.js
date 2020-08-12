export default class CommitCard {
  
  constructor(cardData, dataNews) {
    this.link = cardData.html_url;
    this.avatar_url = cardData.author.avatar_url;
    this.name = cardData.commit.committer.name;
    this.email = cardData.commit.committer.email;
    this.date = dataNews;
    this.message = cardData.commit.message;
  }

  /*  Создаем карточку слайдера  */

  create() {
    const templateCard = `
      <li class="github-commits__slide">
            <a href="" class="github-card" target="_blank">
            <p class="github-card__date"></p>
            <div class="github-card__person">
                <img
                class="github-card__person-image"
                src=""
                alt="Аватарка пользователя GitHub" />
                <div class="github-card__person-info">
                <h5 class="github-card__person-name"></h5>
                <p class="github-card__person-email"></p>
                </div>
            </div>
            <p class="github-card__description"></p>
            </a>
      </li>`;

    const assemblyCard = document.createElement("div");
    assemblyCard.insertAdjacentHTML("afterbegin", templateCard);

    const dataCard = assemblyCard.firstElementChild;

    dataCard.querySelector(".github-card").href = this.link;
    dataCard.querySelector(".github-card__person-image").src = this.avatar_url;
    dataCard.querySelector(".github-card__date").textContent = this.date;
    dataCard.querySelector(".github-card__person-name").textContent = this.name;
    dataCard.querySelector(".github-card__person-email").textContent = this.email;
    dataCard.querySelector(".github-card__description").textContent = this._trimNewsText(this.message);

    this.cardElement = dataCard;
    return dataCard;
  }

  /*  Обрезаем входящие данные до нужного количества символов  */

  _trimNewsText(text) {
    if (text != null) {
      return text.substr(0, 200)
    }
    return text;
  }
}