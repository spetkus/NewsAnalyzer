export default class Search {
    
    constructor(messageBlocks, resultErrorMessage) {
        this.preloaderBlock = messageBlocks.preloaderBlock;
        this.errorBlock = messageBlocks.errorBlock;
        this.resultBlock = messageBlocks.resultBlock;
        this.resultErrorMessage = resultErrorMessage;
    }

    /*  Функция отвечающая за прелоадер  */

    renderPreloader(isLoading) {
        if (isLoading) {
            this.preloaderBlock.classList.remove("news_visible_none");
        } else {
            this.preloaderBlock.classList.add("news_visible_none");
        }
    }

    /*  Показать блок с ошибками  */

    resultErrorOn(numb) {
        this.errorBlock.classList.remove("news_visible_none");
        if (numb === 1) {
            this.title = this.resultErrorMessage.not_found.title;
            this.description = this.resultErrorMessage.not_found.description;
        } else {
            this.title = this.resultErrorMessage.other_error.title;
            this.description = this.resultErrorMessage.other_error.description;
        }
        this.errorBlock.querySelector('.news__title-result').textContent = this.title;
        this.errorBlock.querySelector('.news__description').textContent = this.description;
    }

    /*  Скрыть блок с ошибками  */

    resultErrorOff() {
        this.errorBlock.classList.add("news_visible_none");
    }

    /*  Показать блок с новостями  */

    resultNewsOn() {
        this.resultBlock.classList.remove("news_visible_none");
    }

    /*  Скрыть блок с новостями  */

    resultNewsOff() {
        this.resultBlock.classList.add("news_visible_none");
    }

    /*  Скрыть блок с новостями и блок с ошибками  */

    resultHidden() {
        this.resultNewsOff();
        this.resultErrorOff();
    }

}