export const gigasecond = (date) => {
  return new Date(date.getTime() + MILLISECS);
};

export const MILLISECS = (10 ** 9) * 1000;
