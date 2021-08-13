const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];
const largeArraySize = largeArray.length;

const mergeArrays = (lArray, sArray) => {
  lArray.push(...sArray);
  lArray.sort();
  for (let i = 0; i < sArray.length; i++) {
    lArray.pop();
  }
};
mergeArrays(largeArray, smallArray);
console.log(largeArray);
console.log(largeArraySize === largeArray.length);

module.exports = {
  largeArray,
  largeArraySize,
};
