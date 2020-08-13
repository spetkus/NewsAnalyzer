export default class NewsCardList {

    constructor(container, browserStorage, addNews, buttonNextNews, countRenderNews) {
        this.container = container;
        this.browserStorage = browserStorage;
        this.addNews = addNews;
        this.buttonNextNews = buttonNextNews;
        this.countRenderNews = countRenderNews;
        this.countNews = 0;
        this.preQuery = '';
    }

    /*  Добавляет карточку в разметку  */

    _addCard() {
        this.container.appendChild(this._card.cardElement);
    }

    /*  Рендерит карточки из массива по 3 штуки  */

    render() {
        this.data = this.browserStorage.getInfo("news").articles;
        this.query = this.browserStorage.getInfo("query");
        this._resetCount();
        this.dataCount = this.data.length;
        this.data.splice(this.countNews, this.countRenderNews).forEach((item) => {
            this.countNews = this.countNews + 1;
            this._nextNewsButtonHandler();
            this._card = this.addNews(item);
            this._addCard();
        });
    }

    /*  Очистка контейнера от старых новостей  */

    clearCardList() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
        this._removeEventListeners();
    }

    /*  Обнуление счетчика при обнаружении другого запроса  */

    _resetCount() {
        if (this.query != this.preQuery) {
            this.preQuery = this.query;
            this.countNews = 0;
        }
    }

    /*  Включает и отключает кнопку "Показать еще"  для дозагрузки новостей контейнера CardList  */ 

    _nextNewsButtonHandler() {
        if (this.countNews === this.dataCount) {
            this.countNews = 0;
            this.buttonNextNews.classList.add('news_visible_none');
            this._removeEventListeners();
        } else {
            this.buttonNextNews.classList.remove('news_visible_none');
        }
    }

    /*  Рендер дополнительных карточек при нажатии на "Показать еще" контейнера CardList  */ 

    _nextNews = () => {
        this.render();
    }

    /*  Слушатель ответвенный за кнопку "Показать еще" контейнера CardList */ 

    setEventListeners(){
        this.buttonNextNews.addEventListener("click", this._nextNews);
    }

    /*  Удаление слушателя кнопки "Показать еще" контейнера CardList */ 

    _removeEventListeners(){
        this.buttonNextNews.removeEventListener("click", this._nextNews);
    }


}