const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const blockSize = 3;

const reverseBlocks = (arr, size) => {
  if (size > arr.length) return false;
  if (size === arr.length) return arr;
  let reverseArray = [];
  let start = 0;
  for (let i = 0; i < arr.length / size; i++) {
    if (i + 1 > arr.length / size) {
      reverseArray.push(...arr.slice(start, arr.length));
      break;
    }
    let end = start + size;
    reverseArray.push(...arr.slice(start, end).reverse());
    start = end;
  }
  return reverseArray;
};

console.log(reverseBlocks(arr, blockSize));
module.exports = {
  reverseBlocks,
};
