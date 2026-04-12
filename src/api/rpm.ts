let currentRPM = 64;

const randomInt = (min: number, max: number) =>
  Math.floor(min + (max - min) * Math.random());

export const fetchRPM = async (min: number, max: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (currentRPM > max) currentRPM = max;
      const changeAmount = Math.floor((max - min) / 4);
      const change = randomInt(-changeAmount, changeAmount);
      const newrpm = currentRPM + change;
      if (newrpm >= min && newrpm <= max)
        currentRPM = Math.max(0, currentRPM + change);
      resolve(currentRPM);
    }, 300);
  });
};
