/*  Функция возвращающая объект с форматированной датой вида YYYY-MM-DD  */

export default function dateFormatting(obj) {
  const objDate = {}
  
  Object.keys(obj).forEach((key) => {

    let day = obj[key].getDate();
    if (day < 10) day = "0" + day;

    let month = obj[key].getMonth() + 1;
    if (month < 10) month = "0" + month;

    const year = obj[key].getFullYear();
    const daysResult = `${year}-${month}-${day}`;

    objDate[key] = daysResult;
  });
  return objDate;
}