export default function initBusinessHours() {
  const businessHours = document.querySelector("[data-week]");
  const weekDays = businessHours.dataset.week.split(",").map(Number);
  const hoursWeek = businessHours.dataset.hours.split(",").map(Number);

  const dateNow = new Date();
  const currentDay = dateNow.getDay();
  const currentHour = dateNow.getHours();

  console.log(hoursWeek[1]);

  function openClosedStatus() {
    const isWeekDay = weekDays.indexOf(currentDay) !== -1;
    const isBusinessHour = currentHour >= hoursWeek[0] && currentHour < hoursWeek[1];
    if (isWeekDay && isBusinessHour) {
      businessHours.classList.add("open");
    } else {
      businessHours.classList.add("closed");
    }

    console.log(isBusinessHour);
  }

  openClosedStatus();
}
