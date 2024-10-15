const generateRandomNumber = () => {
  const minm = 10000000;
  const maxm = 99999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};

const generateRandomOtpNumber = () => {
  const minm = 100000;
  const maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};

const getMiliSecond = (minute: number) => {
  const totalMilisecond = Number(minute) * Number(60000);
  return Number(totalMilisecond);
};

const generateAlphaNumber = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const generateUsernameRandom = (length: number) => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789_";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export {
  generateRandomNumber,
  generateRandomOtpNumber,
  getMiliSecond,
  generateAlphaNumber,
  generateUsernameRandom,
};
