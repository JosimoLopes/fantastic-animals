export default class BusinessHours {
  constructor(businessHours) {
    this.businessHours = document.querySelector(businessHours);
  }

  businessHoursData() {
    this.weekDays = this.businessHours.dataset.week.split(",").map(Number);
    this.hoursWeek = this.businessHours.dataset.hours.split(",").map(Number);
  }

  currentData() {
    this.dateNow = new Date();
    this.currentDay = this.dateNow.getDay();
    this.currentHour = this.dateNow.getHours();
    // this.currentHour = dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const isWeekDay = this.weekDays.indexOf(this.currentDay) !== -1;
    const isBusinessHour = this.currentHour >= this.hoursWeek[0] && this.currentHour < this.hoursWeek[1];

    return isWeekDay && isBusinessHour;
  }

  openStatus() {
    if (this.isOpen()) {
      this.businessHours.classList.add("open");
    } else {
      this.businessHours.classList.add("closed");
    }
  }

  init() {
    if (this.businessHours) {
      this.businessHoursData();
      this.currentData();
      this.openStatus();
    }
  }
}
