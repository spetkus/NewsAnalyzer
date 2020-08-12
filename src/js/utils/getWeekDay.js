/*  
    Функция определения дня недели 

    Возвращает объект {
      day: день
      dayOfWeek: день недели
    }
    
*/

export default function getWeekDay(date) {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return {
    day: date.getDate(),
    dayOfWeek: days[date.getDay()]
  }
}