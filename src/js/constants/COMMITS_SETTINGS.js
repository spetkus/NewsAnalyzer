const GITHUB_API_SETTINGS = {
    url: "https://api.github.com",
    username: "spetkus",
    repository: "NewsAnalyzer",
    headers: {
      "Content-Type": "application/json",
    },
  };

const COMMITS_CARD_LIST = ".github-commits__cards-list";

const COMMIT_COUNT_CARD = 20;

export { GITHUB_API_SETTINGS, COMMITS_CARD_LIST, COMMIT_COUNT_CARD}