import getDateForTodayAndFewDaysAgo from "../utils/getDateForTodayAndFewDaysAgo.js";
import dateFormatting from "../utils/dateFormatting.js";

const NEWS_API_SETTINGS = {
  url: new URL(
    NODE_ENV === "development" ?
    "https://newsapi.org/v2/everything" :
    "https://praktikum.tk/news/v2/everything"
  ),
  headers: {
    Accept: "/",
    "Content-Type": "application/json",
  },
  apiToken: "b76b06763c3e4180a7ba4ddb6646966c",
};

const DATES = dateFormatting(getDateForTodayAndFewDaysAgo(7));

const ERROR_MESSAGE = {
  required: "Это обязательное поле",
  lenghtString: "Должно быть от 3 до 20 символов",
  pattern: "В запросе можно использовать лишь русские буквы и цифры от 0-9"
};

const FORM_SEARCH_NEWS = document.forms.search;

const RESULT_BLOCKS = {
  preloaderBlock: document.querySelector("#preloader"),
  errorBlock: document.querySelector("#error"),
  resultBlock: document.querySelector("#news")
}

const RESULT_ERROR_MESSAGE = {
  not_found: {
    title: 'Ничего не найдено',
    description: 'К сожалению по вашему запросу ничего не найдено.'
  },
  other_error: {
    title: 'Во время запроса произошла ошибка',
    description: 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
  }
}

const NEWS_LIST = document.querySelector(`.news__list`);

const BUTTON_NEXT_NEWS = document.querySelector(".news__button");

export { NEWS_API_SETTINGS, DATES, ERROR_MESSAGE, FORM_SEARCH_NEWS, RESULT_BLOCKS, RESULT_ERROR_MESSAGE, NEWS_LIST, BUTTON_NEXT_NEWS };