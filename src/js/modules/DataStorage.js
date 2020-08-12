export default class DataStorage {

    setInfo(content, key){
        this.content = content;
        
        return localStorage.setItem(key, JSON.stringify(this.content));
    }

    getInfo(key){
        this.key = key;
        return JSON.parse(localStorage.getItem(this.key));
    }

    clearSearchInfo(){
        localStorage.clear();
    }

}