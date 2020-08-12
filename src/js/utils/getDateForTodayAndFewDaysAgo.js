/*  Функция возвращающая объект с сегодняшней датой и датой недельной давности.  */

export default function getDateForTodayAndFewDaysAgo(daysAgoNumber) {
  const today = new Date();
  const daysAgo = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - daysAgoNumber
  );
  return {
    today,
    daysAgo
  };
}