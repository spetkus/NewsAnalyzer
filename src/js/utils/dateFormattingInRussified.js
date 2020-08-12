/*  Функция преобразующая дату новости из формата 2020-08-06T12:00:0Z в 6 августа 2020 г.  */

export default function dateFormattingInRussified(date) {
    const trimDate = date.match(/^(\d{4})\-(\d{2})\-(\d{2})/g).join('').split('-');
    const days = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    days.forEach((item, index) => {
        if (trimDate[1] - 1 == index) {
            trimDate[1] = item;
            trimDate.reverse();
            trimDate.push('г.');
        }
    });
    return trimDate.join(' ');
}