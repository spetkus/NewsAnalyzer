import getWeekDay from "../utils/getWeekDay.js";

/* 

    Функция преобразования объекта новости в вид:  

    {
    query: поисковый запрос
    totalResults: количество найденных новостей
        { 
            date: {
                day: день (число)
                dayOfWeek: день недели
            }
            title: заголовок новости
            description: описание новости
        }
    } 
    
*/

export default function formatStaticticsData (dataNews, query) {
    const result = dataNews.articles.map(item => {
         const trimNewsDate= item.publishedAt.match(/^(\d{4})\-(\d{2})\-(\d{2})/g).join('').split('-');
         const date = new Date(trimNewsDate[0], trimNewsDate[1]-1, trimNewsDate[2]);
         item.publishedAt = getWeekDay(date);
         return {
             date: item.publishedAt,
             title: item.title,
             description: item.description
         };
     }).reverse();
 
     result.query = query;
     result.totalResults = dataNews.totalResults;
     
     return result;
 }