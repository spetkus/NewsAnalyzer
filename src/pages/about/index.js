import "swiper/swiper-bundle.css";
import Swiper from "swiper/bundle";
import "../about/about.css";
import {
  GITHUB_API_SETTINGS,
  COMMITS_CARD_LIST,
  COMMIT_COUNT_CARD
} from "../../js/constants/COMMITS_SETTINGS.js";
import SWIPER_SETTING_OBJECT from "../../js/constants/SWIPER_SETTINGS.js";
import dateFormattingInRussified from "../../js/utils/dateFormattingInRussified.js";
import GithubApi from "../../js/modules/GithubApi.js";
import CommitCard from "../../js/components/CommitCard.js";
import CommitCardList from "../../js/components/CommitCardList.js";

(function () {

/*  Инициализация GitHubApi  */

const githubApi = new GithubApi(GITHUB_API_SETTINGS);

/*  Инициализация CommitCardList  */

const container = new CommitCardList(document.querySelector(`.github-commits__wrapper`));

/*  Вывод карточек из массива полученного от API  */

function initialCards(array, countCard) {
  if (array.length > countCard){
    array = array.slice(0, countCard);
  }
  const cardArray = array.map(item => {
    const card = new CommitCard(item, dateFormattingInRussified(item.commit.committer.date));
    card.create();
    return card;
  });
  container.render(cardArray);
}

githubApi.getCommits()
  .then((content) => {
    initialCards(content, COMMIT_COUNT_CARD);
    const swiper = new Swiper(COMMITS_CARD_LIST, SWIPER_SETTING_OBJECT);
  })
  .catch((err) => {
    console.log(err);
  });

})();