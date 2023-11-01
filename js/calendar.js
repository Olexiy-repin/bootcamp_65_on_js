const calendarBodyEl = document.querySelector('.js-calendar-body');
let prevCalendarItemEl = null;

const onCalendarItemElClick = ({ target: calendarItemEl }) => {
  if (calendarItemEl.textContent === '') {
    return;
  }

  if (prevCalendarItemEl === calendarItemEl) {
    calendarItemEl.classList.toggle('active');
    prevCalendarItemEl = null;

    return;
  }

  if (prevCalendarItemEl !== null) {
    prevCalendarItemEl.classList.remove('active');
  }

  calendarItemEl.classList.add('active');
  prevCalendarItemEl = calendarItemEl;
};

calendarBodyEl.addEventListener('click', onCalendarItemElClick);
