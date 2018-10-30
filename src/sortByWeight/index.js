/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const compare = (a, b) => a.value - b.value;
  const maperToObj = el => {
    return { key: el, value: el.split('').reduce((a,b) => Number(a) + Number(b)) };
  };
  const result = arr.map(maperToObj).sort(compare).map(el => el.key);
  return result;
};
