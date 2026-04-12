import { clamp, randomInt } from "../util";

let currentRPM = 64;

export const fetchRPM = async (min: number, max: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (currentRPM > max) currentRPM = max;
      const changeAmount = Math.max(1, Math.ceil((max - min) / 4));
      const change = randomInt(-changeAmount, changeAmount);
      currentRPM = clamp(currentRPM + change, min, max);
      resolve(currentRPM);
    }, 300);
  });
};
