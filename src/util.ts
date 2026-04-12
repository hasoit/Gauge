export const fixNaN = (value: number, fallback: number = 0) =>
  isNaN(value) ? fallback : value;

export const randomInt = (min: number, max: number) =>
  Math.floor(min + (max - min) * Math.random());

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
