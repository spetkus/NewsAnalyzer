import "./style.css";
import {
  NEWS_API_SETTINGS,
  DATES,
  ERROR_MESSAGE,
  FORM_SEARCH_NEWS,
  RESULT_BLOCKS,
  RESULT_ERROR_MESSAGE,
  NEWS_LIST,
  COUNT_RENDER_NEWS,
  BUTTON_NEXT_NEWS
} from "../js/constants/NEWS_SETTINGS.js";
import dateFormattingInRussified from "../js/utils/dateFormattingInRussified.js";
import NewsApi from "../js/modules/NewsApi.js";
import DataStorage from "../js/modules/DataStorage.js";
import FormValidator from "../js/components/FormValidation.js";
import Search from "../js/components/Search.js";
import NewsCard from "../js/components/NewsCard.js";
import NewsCardList from "../js/components/NewsCardList.js";

(function () {

/*  Инициализация NewsApi */

const newsApi = new NewsApi(NEWS_API_SETTINGS);


/*  Инициализация DataStorage  */

const browserStorage = new DataStorage();


/*  Функция вывода карточек из массива полученного от API  */

function addNews(datas) {
  const card = new NewsCard(datas, dateFormattingInRussified(datas.publishedAt));
  card.create();
  return card;
}


/*  Инициализация NewsCardList  */

const container = new NewsCardList(NEWS_LIST, browserStorage, addNews, BUTTON_NEXT_NEWS, COUNT_RENDER_NEWS);


/*  Инициализация SearchInput  */

const search = new Search(RESULT_BLOCKS, RESULT_ERROR_MESSAGE);


/*  Проверка на наличие данных в localStorage. Если есть, то рендерим. */

const newsData = browserStorage.getInfo("news");
const querySearch = browserStorage.getInfo("query");

if (newsData != null && querySearch != null) {
  FORM_SEARCH_NEWS.elements.text.value = querySearch;
  container.setEventListeners();
  container.render();
  search.resultNewsOn();
} 


/*  Инициализация FormValidator  */

const validationFormSearchNews = new FormValidator(
  FORM_SEARCH_NEWS,
  ERROR_MESSAGE,
  submitExecution
);

validationFormSearchNews.init();
validationFormSearchNews.validateForms();


/*  Функция обработки submit формы поиска  */

function submitExecution(searchValue) {
  search.resultHidden();
  container.clearCardList();
  container.setEventListeners();
  validationFormSearchNews.buttonSubmitDisable();
  search.renderPreloader(true);
  newsApi
    .getNews(searchValue, DATES.today, DATES.daysAgo)
    .then((content) => {
      if (content.articles.length === 0) {
        search.resultErrorOn(1);
      } else {
        browserStorage.setInfo(searchValue, "query");
        browserStorage.setInfo(content, "news");
        container.render();
        search.resultNewsOn();
      }
    })
    .catch((res) => {
      search.resultErrorOn(0);
    })
    .finally(() => {
      validationFormSearchNews.buttonSubmitEnable();
      search.renderPreloader(false);
    });
}

})();