export default class NewsApi {
  constructor(settings) {
    this.url = settings.url;
    this.headers = settings.headers;
    this.apiToken = settings.apiToken;
  }

  getNews(query, from, to, sortBy = "publishedAt") {
      
    this.params = {
      q: query,
      from: from,
      to: to,
      pageSize: 100,
      sortBy: sortBy,
      apiKey: this.apiToken,
    };

    this.url.search = "";
    const stringParams = Object.keys(this.params).forEach((key) =>
      this.url.searchParams.append(key, this.params[key])
    );

    return fetch(this.url, this.headers).then((res) => this.resJson(res));
  }

  resJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
}
