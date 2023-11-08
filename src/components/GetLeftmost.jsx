export const GetLeftmostDigit = ({ number }) => {
    if (number >= 0) {
      while (number >= 10) {
        number = Math.floor(number / 10);
      }
      return number;
    } else {
      return null;
    }
  };
  