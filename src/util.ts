export const fixNaN = (val: number) => (isNaN(val) ? 0 : val);

export const randomInt = (min: number, max: number) =>
  Math.floor(min + (max - min) * Math.random());

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
