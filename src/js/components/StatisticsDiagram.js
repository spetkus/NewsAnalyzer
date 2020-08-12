import Statistics from './Statistics.js'
export default class StatisticsDiagram extends Statistics {

    constructor({
        STATISTICS_DEFAULT_ELEMENT,
        STATISTICS_DIAGRAM_CONTAINER,
        staticticsData
    }) {
        super({
            STATISTICS_DEFAULT_ELEMENT,
            staticticsData
        });
        this.containerDiagram = STATISTICS_DIAGRAM_CONTAINER;
    }

    renderDiagram() {

        this.domDate = this.containerDiagram.querySelectorAll('.diagram-grid__day');
        this.domProgressBar = this.containerDiagram.querySelectorAll('.progress-bar');
        this.domProgressBarNumber = this.containerDiagram.querySelectorAll('.progress-bar__number');

        this._sortData();
        this._mentionCounter();
        this._createDiagramElement();

    }

    /*  Наполнение диаграммы  */

    _createDiagramElement() {

        this.keys.forEach((item, index) => {

            if (typeof (this.week[item].day) != 'undefined') {
                this.domDate[index].textContent = this.week[item].day;
            } else {
                this.domDate[index].textContent = 'Нет';
            }

            if (typeof (this.week[item].totalNumbers) != 'undefined' && this.week[item].totalNumbers != 0) {
                this.domProgressBar[index].style.width = `${(this.week[item].totalNumbers / this.week.allKeywords) * 100}%`;
                this.domProgressBarNumber[index].textContent = this.week[item].totalNumbers;
            } else {
                this.domProgressBar[index].style.width = '100%';
                this.domProgressBar[index].style.backgroundColor = '#a3a3a3';
                this.domProgressBarNumber[index].textContent = 0;
            }
        });
    }

    /*  
        Подсчет совпадений ключевого слова в заголовке и описании новости в каждом дне недели.
        Подсчет общего количества совпадений в дне недели.
        Подсчет общего количества совпадений за неделю. 
    */

    _mentionCounter() {
        this.allKeywords = 0;
        this.keys = Object.keys(this.week);
        this.keys.forEach((key) => {

            let numberOfTitle = 0;
            let numberOfDescription = 0;

            this.week[key].forEach((item) => {
                if (item.title.toUpperCase().includes(this.data.query.toUpperCase()) === true) {
                    numberOfTitle++;
                }
                if (item?.description) {
                    item.description.toUpperCase().includes(this.data.query.toUpperCase()) ? numberOfDescription++ : false;
                }
                this.week[key].numberOfTitle = numberOfTitle;
                this.week[key].numberOfDescription = numberOfDescription;
                this.week[key].totalNumbers = numberOfTitle + numberOfDescription;
            });

            if (typeof this.week[key].numberOfTitle === "number") {
                this.allKeywords = (this.week[key].numberOfTitle + this.week[key].numberOfDescription) + this.allKeywords;
                this.week.allKeywords = this.allKeywords;

            }
        })

    }

    /*  Сортировка полученных данных по дням недели  */

    _sortData() {

        this.week = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        };

        this.data.forEach((item) => {
            if (item.date.dayOfWeek.includes('вс')) {
                this.week.sunday.day = `${item.date.day},${item.date.dayOfWeek}`;
                this.week.sunday.push(item)
            } else if (item.date.dayOfWeek.includes('пн')) {
                this.week.monday.push(item)
                this.week.monday.day = `${item.date.day},${item.date.dayOfWeek}`;
            } else if (item.date.dayOfWeek.includes('вт')) {
                this.week.tuesday.push(item)
                this.week.tuesday.day = `${item.date.day},${item.date.dayOfWeek}`;
            } else if (item.date.dayOfWeek.includes('ср')) {
                this.week.wednesday.push(item)
                this.week.wednesday.day = `${item.date.day},${item.date.dayOfWeek}`;
            } else if (item.date.dayOfWeek.includes('чт')) {
                this.week.thursday.push(item)
                this.week.thursday.day = `${item.date.day},${item.date.dayOfWeek}`;
            } else if (item.date.dayOfWeek.includes('пт')) {
                this.week.friday.push(item)
                this.week.friday.day = `${item.date.day},${item.date.dayOfWeek}`;
            } else if (item.date.dayOfWeek.includes('сб')) {
                this.week.saturday.push(item)
                this.week.saturday.day = `${item.date.day},${item.date.dayOfWeek}`;
            } else {
                return falseж
            }
        })

    }

}