export default class Statistics {

    constructor({
        STATISTICS_DEFAULT_ELEMENT,
        staticticsData
    }) {
        this.searchTitle = STATISTICS_DEFAULT_ELEMENT.searchTitle;
        this.countTitle = STATISTICS_DEFAULT_ELEMENT.countTitle;
        this.countWeek = STATISTICS_DEFAULT_ELEMENT.countWeek;
        this.data = staticticsData;
    }

    init() {
        this._renderSearchQuery();
        this._renderCountNewsForTheWeek();
        this._renderCountKeywordInTitles();
    }

    /*  Рендер ключевого слова из поиска  */

    _renderSearchQuery() {
        const formatQueryString = this.data.query.slice(0, 1).toUpperCase() + this.data.query.slice(1, this.data.query.length);
        this.searchTitle.textContent = `Вы спросили: «${formatQueryString}»`;
    }

    /*  Рендер результата "Новостей за неделю"  */

    _renderCountNewsForTheWeek() {
        this.countWeek.textContent = this.data.totalResults;
    }

    /*  Рендер результата "Упоминаний в загаловках"  */

    _renderCountKeywordInTitles() {
        let countNews = 0;
        for (let i = 0; i <= this.data.totalResults; i++) {
            if (this.data[i]?.title) {
                this.data[i].title.toLowerCase().includes(this.data.query.toLowerCase()) ? countNews++ : false;
            };
        }
        this.countTitle.textContent = countNews;
    }

}