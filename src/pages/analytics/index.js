import "../analytics/analytics.css";
import { STATISTICS_DEFAULT_ELEMENT, STATISTICS_DIAGRAM_CONTAINER } from "../../js/constants/STATISTICS_ELEMENTS.js";
import formatStaticticsData from "../../js/utils/formatStaticticsData.js";
import DataStorage from "../../js/modules/DataStorage.js";
import StatisticsDiagram from "../../js/components/StatisticsDiagram.js";

(function () {

/*  Инициализация DataStorage  */

const browserStorage = new DataStorage();

const newsData = browserStorage.getInfo("news");
const querySearch = browserStorage.getInfo("query");


/*  Проверка на наличие данных в localStorage */

if (newsData != null && querySearch != null) {

    const staticticsData = formatStaticticsData(newsData, querySearch);

    /*  Инициализация StatisticsDiagram  */

    const statistics = new StatisticsDiagram({
        STATISTICS_DEFAULT_ELEMENT, 
        STATISTICS_DIAGRAM_CONTAINER, 
        staticticsData
    });
    
    statistics.init();
    statistics.renderDiagram();

}

})();















