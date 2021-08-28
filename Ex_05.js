// const reverseBlocks = (arr, size) => {
//   if (size > arr.length) return false;
//   if (size === arr.length) return arr;
//   let reverseArray = [];
//   let start = 0;
//   for (let i = 0; i < arr.length / size; i++) {
//     if (i + 1 > arr.length / size) {
//       reverseArray.push(...arr.slice(start, arr.length).reverse());
//       break;
//     }
//     let end = start + size;
//     reverseArray.push(...arr.slice(start, end).reverse());
//     start = end;
//   }
//   return reverseArray;
// };

const reverseBlocks = (arr, size) => {
  if (size > arr.length || size <= 0) return false;
  if (size === arr.length) return arr;
  let i;
  for (i = 0; i < arr.length - size; i += size) {
    for (let j = 0; j < Math.floor(size / 2); j++) {
      [arr[i + j], arr[i - j + size - 1]] = [arr[i - j + size - 1], arr[i + j]];
    }
  }
  const last = arr.length - i;
  for (; i < arr.length; i += last) {
    for (let j = 0; j < Math.floor(last / 2); j++) {
      [arr[i + j], arr[i - j + last - 1]] = [arr[i - j + last - 1], arr[i + j]];
    }
  }
  return arr;
};

module.exports = {
  reverseBlocks,
};
