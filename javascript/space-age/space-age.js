export const age = (planet, seconds) =>
  Math.round(seconds / secsPerEarthYear / earthYearEquivs[planet] * 100) / 100;

export const secsPerEarthYear = 31557600;

export const earthYearEquivs = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0, 
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};
