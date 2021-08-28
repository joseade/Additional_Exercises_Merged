const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];
const largeArraySize = largeArray.length;

const mergeArrays = (lArray, sArray) => {
  let k = lArray.length - 1;
  let w = 0;
  for (let i = sArray.length - 1; i >= 0; i--) {
    for (let j = lArray.length - sArray.length - 1 - w; j >= 0; j--) {
      if (lArray[j] >= sArray[i]) {
        lArray[k] = lArray[j];
        k--;
        w++;
        continue;
      }
      lArray[k] = sArray[i];
      k--;
      break;
    }
    if (k >= 0 && w === lArray.length - sArray.length) {
      console.log("AA");
      lArray[k] = sArray[i];
      k--;
    }
  }
};

mergeArrays(largeArray, smallArray);
console.log(largeArray);

module.exports = {
  largeArray,
  largeArraySize,
};
