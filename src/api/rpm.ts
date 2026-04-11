let currentRPM = 64;

const randomInt = (a: number, b: number) =>
  Math.floor(a + (b - a) * Math.random());

export const fetchRPM = async (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const changeAmount = 16
      const change = randomInt(-changeAmount, changeAmount);
      currentRPM = Math.max(0, currentRPM + change);
      resolve(currentRPM);
    }, 300);
  });
};
