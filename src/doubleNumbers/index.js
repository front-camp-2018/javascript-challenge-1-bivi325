/* eslint-disable-next-line */
export const doubleNum = num => {
  const stringNum = num.toString();
  const length = stringNum.length;

  if (length % 2 === 0){
    const leftString = stringNum.slice(0, length / 2);
    const rightString = stringNum.slice(length / 2);
    if (leftString === rightString){
      return num;
    }
  }

  return num * 2;
};
