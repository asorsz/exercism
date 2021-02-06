export const meetup = (yr, mth, desc, day) => {
  let date;
  let incr;
  if (desc === 'last') {
    date = new Date(yr, mth, 0).getDate();
    incr = -1
  } else {
    date = startDates[desc];
    incr = 1;
  }
  
  while (new Date(yr, mth-1, date).getDay() !== daysOfWeek.indexOf(day)) {
    date += incr;
  }

  return new Date(yr, mth-1, date)
};

export const startDates = {
  first: 1,
  second: 8,
  third: 15,
  fourth: 22,
  fifth: 29,
  teenth: 13,
};

export const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
