export default class GithubApi {
    constructor(settings) {
      this.baseUrl = settings.url;
      this.username = settings.username;
      this.repository = settings.repository;
      this.headers = settings.headers;
    }
  
    getCommits() {
        return fetch(`${this.baseUrl}/repos/${this.username}/${this.repository}/commits`, {
            headers: this.headers
          })
            .then((res) => this.resJson(res))
        } 
  
    resJson(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }
  