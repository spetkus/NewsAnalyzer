export default class NewsCard {
  
  constructor(cardData, dataNews) {
    this.link = cardData.url;
    this.image = cardData.urlToImage;
    this.date = dataNews;
    this.title = cardData.title;
    this.text = cardData.description;
    this.media = cardData.source.name;
  }

  /*  Создаем карточку новости  */

  create() {
    const templateCard = `
    <li>
        <a class="news-card" href="" target="_blank">
        <figure class="news-card__image-container">
          <img class="news-card__image" src="" alt="Фотография превью новости" />
        </figure>
        <div class="news-card__description">
            <p class="news-card__date"></p>
            <h3 class="news-card__name"></h3>
            <p class="news-card__text"></p>
            <p class="news-card__media"></p>
        </div>
        </a>
    </li>`;

    const assemblyCard = document.createElement("div");
    assemblyCard.insertAdjacentHTML("afterbegin", templateCard);

    const dataCard = assemblyCard.firstElementChild;
    this._trimDataCard();

    dataCard.querySelector(".news-card").href = this.link;
    dataCard.querySelector(".news-card__image").src = (this.image === null) ? require('../../images/not-image.png').default : this.image;
    dataCard.querySelector(".news-card__date").textContent = this.date;
    dataCard.querySelector(".news-card__name").textContent = this.title;
    dataCard.querySelector(".news-card__text").textContent = this.text; 
    dataCard.querySelector(".news-card__media").textContent = this.media; 

    this.cardElement = dataCard;
    return dataCard;
  }

  /*  Обрезаем входящие данные до нужного количества символов  */

  _trimDataCard() {
    if (this.title != null){
      this.title = this.title.substr(0, 50);
    }
    if (this.text != null) {
      this.text = this.text.substr(0, 200);
    }
    if (this.media != null) {
      this.media = this.media.substr(0, 19);
    }
  }
}